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
      ],

      menuTheCompany : [
        {
          icon: 'fa-solid fa-medal',
          title: 'Tradition',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: 'fa-solid fa-lock',
          title: 'Security',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: 'fa-solid fa-pen-to-square',
          title: 'Certificate',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: 'fa-solid fa-graduation-cap',
          title: 'Expertise',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        }
      ],
      businessAreas : [
        {
          icon: "fa-solid fa-network-wired",
          title: 'Audit & Assurance',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: "fa-solid fa-briefcase",
          title: 'Financial Advisory',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: "fa-solid fa-chart-simple",
          title: 'Analytics and M&A',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: "fa-solid fa-plane-departure",
          title: 'Middle Marketing',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: 'Legal consulting',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        },
        {
          icon: "fa-solid fa-folder-open",
          title: 'Regulatory risk',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel pariatur ut similique saepe tempore.'
        }
      ],

      arrayCard :[
        {
          img : "./team-1.jpg",
          name : "David Cooper" , 
          role: "CTO & CO-FOUNDER"
        },
        {
          img : "./team-3.jpg",
          name : "Oliver Jones" , 
          role: "CHIEF PROCUREMENT"
        },
        {
          img : "./team-2.jpg",
          name : "Emma Lopez" , 
          role: "CHIEF MARKETING"
        },
        {
          img : "./team-4.jpg",
          name : "T.Johnson" , 
          role: "CEO & PRESIDENT"
        },

      ] 
      
});