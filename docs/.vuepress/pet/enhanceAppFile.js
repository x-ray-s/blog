import Vue from 'vue'
import FloatingDogPet from '../components/FloatingDogPet.vue'

export default ({ isServer }) => {
  if (isServer) return

  let petInstance = null

  Vue.mixin({
    mounted() {
      if (this !== this.$root || petInstance || document.getElementById('floating-dog-pet-root')) {
        return
      }

      const root = document.createElement('div')
      const mountPoint = document.createElement('div')
      root.id = 'floating-dog-pet-root'
      root.appendChild(mountPoint)
      document.body.appendChild(root)

      const PetConstructor = Vue.extend(FloatingDogPet)
      petInstance = new PetConstructor()
      petInstance.$mount(mountPoint)
    },
  })
}
