import { reactive } from "vue"

export const store = reactive ({
       menuBar : [
        {
          icona: 'fa-solid fa-phone',
          testo: '+1 (305) 1234-45678',
          link: '#'
        },
        {
          icona: 'fa-solid fa-envelope',
          testo: 'hello@example.it',
          link: '#'
        },
        {
          icona: 'fa-brands fa-facebook',
          link: '#'
        },
        {
          icona: 'fa-brands fa-twitter',
          link: '#'
        },
        {
          icona: 'fa-brands fa-linkedin-in',
          link: '#'
        }
      ]
});