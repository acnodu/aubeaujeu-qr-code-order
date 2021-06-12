<template>
	<div class="row" style="margin-top: 1em;">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-body">
                    <h5 class="card-title">Imprimantes</h5>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="card-subtitle mb-2 text-muted">Accueil</h6>
                            <form>
                                <div class="form-group">
                                    <input class="form-control form-control-sm" type="text" placeholder="Adresse IP">
                                </div>
                                <div class="form-group">
                                    <input class="form-control form-control-sm" type="text" placeholder="Port">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-success">Sauvegarder</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <h6 class="card-subtitle mb-2 text-muted">Bar</h6>
                            <div class="form-group">
                                <input class="form-control form-control-sm" type="text" placeholder="Adresse IP">
                            </div>
                            <div class="form-group">
                                <input class="form-control form-control-sm" type="text" placeholder="Port">
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-success">Sauvegarder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParametresVue'
}
</script>

<style scoped>
</style>