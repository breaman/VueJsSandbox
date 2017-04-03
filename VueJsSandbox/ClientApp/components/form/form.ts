//import Vue from 'vue';
import { Component, Lifecycle, Vue } from 'av-ts';
import axios from 'axios';
import { Validator } from 'vee-validate';

@Component({
    template: '#form-template'
})
export default class FormComponent extends Vue {
    emailAddress: string = null;
    teamName: string = null;
    coupon: string = null;
    teamNameIsValid: boolean = false;
    couponIsValid: boolean = false;

    validateName() {
        //(this.$validator.validate('teamName', this.teamName) as Promise<boolean>);
        (this.$validator.validate('teamName', this.teamName) as Promise<boolean>).then((result: boolean) => {
            this.teamNameIsValid = result;
        });
    }

    validateCoupon() {
        (this.$validator.validate('coupon', this.coupon) as Promise<boolean>).then((result: boolean) => {
            this.couponIsValid = result;
        });
    }

    @Lifecycle created() {
        Validator.extend('verify_coupon', {
            getMessage: (field: string) => `The ${field} is not a valid coupon.`,
            validate: (value: string) => new Promise<any>(resolve => {
                const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'];

                setTimeout(() => {
                    resolve({
                        valid: value && !! ~validCoupons.indexOf(value.toUpperCase())
                    });
                }, 500);
            })
        });

        this.$validator.attach('coupon', 'verify_coupon', this);

        Validator.extend('verify_team_name', {
            getMessage: (field: any) => `The ${field} is not a valid team name.`,
            validate: (value: string) => {
                console.log('verify_team_name value', value);
                return axios.post('/api/team/validate', { teamname: value })
                    .then((result) => {
                        return Promise.resolve({ valid: result.data.valid })
                    });
            }
        });

        this.$validator.attach('teamName', 'verify_team_name', this);
    }
}