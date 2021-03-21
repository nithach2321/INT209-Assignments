const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 3,
            message: "must be at least 3 digits"
        },        
    },
    chosensubject: {
        presence: true
    }
}

var app =Vue.createApp({
    data() {
        return {
            imgProfileUrl: 'https://scontent.fbkk9-2.fna.fbcdn.net/v/t31.0-1/c33.0.200.200a/p200x200/23593671_1661648053886646_4665329394504623547_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF4MamstvfHmUDLTFXbx9qcqt60xwZ205iq3rTHBnbTmMXmgz01u7UsNLxibQ1wpnGdO1LossuhCeJcUyRtycPm&_nc_ohc=rxeZwCgN9U0AX_jXjZx&_nc_ht=scontent.fbkk9-2.fna&tp=27&oh=bd9b6d265671f9b38f9daf4cebcb7024&oe=606933DB',
            facebookUrl: 'https://www.facebook.com/Bom.nithach/',
            instagramUrl: 'https://www.instagram.com/bom_2321/',
            firstname: 'Nithach',
            lastname: 'Vassanapong',
            age: 20,
            gender: 'Male',
            email: 'Bom-_2321@outlook.co.th',
            phone: '0875518757',
            chosensubject: 'INT203',
            formdata: {
                firstname: null,
                lastname: null,
                age: null,
                gender: null,
                email: null,
                phone: null,
                chosensubject: null,
            },
            subject_lists: [{subject_id: 1, subject_name:'Intro to Vue 3'},
                            {subject_id: 2, subject_name: 'Vue 3 Forms'},
                            {subject_id: 3, subject_name: 'Vue 3 Reactivity'}],
            errors: null,
            
        }
    },

    methods: {
        checkForm(e){
            console.log(e);
            this.errors = validate(this.formdata,
                                    constraints)
            if(!this.errors){
                alert("Your profile is updated successfully.")
                this.firstname = this.formdata.firstname;
                this.lastname = this.formdata.lastname;
                this.age = this.formdata.age;
                this.gender = this.formdata.gender;
                this.email = this.formdata.email;
                this.phone = this.formdata.phone;
                this.chosensubject = this.subject_lists[this.formdata.chosensubject-1].subject_name;
            }
        }
    }
})

app.mount('#app')