<template>
  <v-card
    tile
    width="500"
    class="pa-8 ma-auto"
  >
    <v-form v-model="valid">
      <v-text-field
        v-model="name"
        label="Name"
        required
        :error-messages="nameErrors"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      />

      <v-text-field
        v-model="email"
        label="E-mail"
        required
        :error-messages="emailErrors"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      />
      <v-text-field
        v-model="phone"
        label="Phone"
        :error-messages="phoneErrors"
        required
        @input="$v.phone.$touch()"
        @blur="$v.phone.$touch()"
      />
      <v-text-field
        v-model="address"
        label="Delivery address"
      />
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree with privacy policy?"
        required
        class="mb-10"
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      />
      <div class="text-right">
        <v-btn
          color="primary"
          class="text-right"
          @click="submit"
        >
          Order
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import helper from '@/utils/helper'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(30) },
    email: { required, email },
    phone: { required, minLength: minLength(3) },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },
  data () {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      address: '',
      checkbox: false
    }
  },
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) {
        return errors
      }
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.maxLength && errors.push('Name must be at least 3 characters long')
      !this.$v.name.maxLength && errors.push('Name must be at most 30 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) {
        return errors
      }
      !this.$v.phone.maxLength && errors.push('Phone must be at least 3 characters long')
      !this.$v.phone.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // console.log('Request sent!')
        this.makeOrder()
      }
    },

    async makeOrder () {
      const response = await helper.postOrder({
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address
      })
      alert(`Store is not deployed. It is boilerplate.\n${response.status}`)
    }
  }
}
</script>

<style scoped>

</style>
