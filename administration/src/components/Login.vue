<template>
	<main role="main">
        <div class="container">
            <div class="mt-5 col-md-4 offset-md-4">
                <img src="https://aubeaujeu.com/images/logo.png" width="300px">

                <form class="form-signin" @submit.prevent="login">
                    <div class="form-group">
                        <input ref="username" type="text" class="form-control" placeholder="Nom d'utilisateur" autofocus="focus">
                    </div>
                    <div class="form-group">
                        <input ref="password" type="password" class="form-control" placeholder="Mot de passe">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-lg btn-success btn-block" type="submit">Se connecter</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'TablesVue',
    methods:{
        login() {
            if( this.$refs.username.value == 'suicide' &&
                this.$refs.password.value == 'mort'    ){

                this.$emit('is_logged', true)
            }
        }
    }
}
</script>

<style scoped>
    img{
        display: block;
        margin: 20% auto;
        width: 85%;
    }
</style>