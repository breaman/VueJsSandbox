<template>
    <div class="row">
        <div class="col-sm-12">
            <div :class="{'has-error': errors.has('email'), 'form-group':true}">
                <label for="email">Email</label>
                <p>
                    <input v-model="emailAddress" v-validate="'required|email'" :class="{'has-error': errors.has('email'), 'form-control':true}" name="email" type="text" placeholder="Email">
                    <span v-show="errors.has('email')" class="help-block">{{ errors.first('email') }}</span>
                </p>
            </div>
        </div>
        <div class="col-sm-12">
            <div :class="{'has-error': errors.has('teamName'), 'form-group':true}">
                <label for="teamName">Team Name</label>
                <p>
                    <input v-model="teamName" :class="{'has-error': errors.has('teamName'), 'form-control':true}" name="teamName" type="text" placeholder="Team Name">
                    <span v-show="errors.has('teamName')" class="help-block">{{ errors.first('teamName') }}</span>
                </p>
                <button @click="validateName">Validate</button>
            </div>
        </div>
        <div class="col-sm-12">
            <div :class="{'has-error': errors.has('coupon'), 'form-group':true}">
                <label for="coupon">Coupon</label>
                <p>
                    <input v-model="coupon" :class="{'has-error': errors.has('coupon'), 'form-control':true}" name="coupon" type="text" placeholder="Coupon">
                    <span v-show="errors.has('coupon')" class="help-block">{{ errors.first('coupon') }}</span>
                </p>
                <button @click="validateCoupon">Validate</button>
            </div>
        </div>
    </div>
</template>

<script src="./form.ts"></script>