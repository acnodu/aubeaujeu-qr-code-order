<template>
	<div class="row" style="margin-top: 1em;">
        <div class="col-md-12">
            <div class="card card-default">
                <div class="card-body">
                    <h5 class="card-title">Imprimantes</h5>
                    <hr>
                    <form>
                        <div class="row">
                            <div class="col-md-6" v-for="(imprimante, index) in imprimantes" :key="index">
                                <h6 class="card-subtitle mb-2 text-muted">{{imprimante.name}} - 
                                    <span @click="test_print(index)" :id="'test_'+index" class="badge badge-primary">Tester</span>
                                    <span :id="'print_'+index" class="badge badge-info" style="display: none;">Impression</span>
                                </h6>
                                
                                <div class="form-group">
                                    <input class="form-control form-control-sm" type="text" placeholder="Adresse IP" v-model="imprimantes[index].ip">
                                </div>
                                <div class="form-group">
                                    <input class="form-control form-control-sm" type="text" placeholder="Port" v-model="imprimantes[index].port">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-success">Sauvegarder</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { $, printer } from '@/libraries'

export default {
    name: 'ParametresVue',
    props: ['imprimantes'],

    methods: {
        async test_print(index) {
            $('#test_' + index).hide()
            $('#print_' + index).show()

            let printed = await printer.test(this.imprimantes[index])
            
            if( printed ){  
                $('#test_' + index).removeClass('badge-danger')  
            }else{  
                $('#test_' + index).addClass('badge-danger')
            }

            $('#print_' + index).hide()
            $('#test_' + index).show()
        }
    }
}
</script>

<style scoped>
    span{
        cursor: pointer;
    }
</style>