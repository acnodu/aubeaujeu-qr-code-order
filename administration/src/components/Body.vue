<template>
	<main role="main">
        <div class="container">
            <div class="row spread">
                <div class="col-md-4">
                    <div class="card mb-3">
                        <div class="card-header">
                            Accès rapide
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-success mr-1">
                                Imprimer un code    
                            </button>

                            <button type="button" class="btn btn-primary">
                                Trouver une note
                            </button>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-header">
                            Suivi du service
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Commandes en attente : <b>0</b></li>
                            <li class="list-group-item">Nombre de tables : <b>0</b></li>
                            <li class="list-group-item">Système : 
                                <span class="badge badge-success">CONNECTÉ</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-8">
                    <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tables (0)</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Consommations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Paramètres</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <TablesVue />
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <ConsommationsVue />
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <ParametresVue />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TablesVue from '@/components/Tables.vue'
import ConsommationsVue from '@/components/Consommations.vue'
import ParametresVue from '@/components/Parametres.vue'

export default {
    name: 'BodyVue',
    components: {
		TablesVue,
        ConsommationsVue,
        ParametresVue
	}
}
</script>

<style scoped></style>