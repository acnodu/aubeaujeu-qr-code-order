<template>
	<div id="accordion">
        <div class="card">
            <div v-for="(v_consommations,k_consommations) in consommations" :key="k_consommations">
                <h6 class="mb-0" id="headingOne" data-toggle="collapse" :data-target="'#collapse' + k_consommations" aria-expanded="true" aria-controls="collapseOne">
                    {{k_consommations}} ({{v_consommations.length}})
                </h6>
                <div :id="'collapse' + k_consommations"  class="collapse hide" aria-labelledby="headingOne" data-parent="#accordion">
                    <table class="table">
                        <tbody>
                            <tr v-for="(conso, index) in v_consommations" :key="index">
                                <th>{{index+1}}</th>
                                <td>{{conso.name}}</td>
                                <td width="100px">{{conso.price}}€</td>
                                <td width="100px">
                                    <svg v-if="conso.available" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-eye mr-2" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                    </svg>
                                    
                                    <svg v-if="!conso.available" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="silver" class="bi bi-eye-slash mr-2" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                                    </svg>
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-pencil mr-2" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParametresVue',
    data () {
        return {
            'consommations': {
                'snacks': [
                    {
                        id: 'VR3aPP',
                        name: 'Chips',
                        price: '4,00',
                        available: true
                    },
                    {
                        id: 'nPQUlM',
                        name: 'Frites',
                        price: '6,00',
                        available: false
                    }
                ],
                'softs': [
                    {
                        id: 'onVCw0',
                        name: 'Diabolo Grenadine',
                        price: '2,40',
                        available: true
                    },
                    {
                        id: 'K9XhKi',
                        name: 'Verre d\'eau',
                        price: '0,00',
                        available: false
                    },
                    {
                        id: 'CVlStR',
                        name: 'Orangina',
                        price: '2,40',
                        available: true
                    },
                    {
                        id: 'EleeCG',
                        name: 'Coca-Cola',
                        price: '3,00',
                        available: true
                    },
                    {
                        id: 'wTzBst',
                        name: 'Coca-Cola Light',
                        price: '3,00',
                        available: true
                    }
                ],
                'bières': [
                    {
                        id: 'XkYmZ8',
                        name: 'Cuvée des Jonquilles',
                        price: '5,40',
                        available: false
                    },
                    {
                        id: 'dEEGgk',
                        name: 'L\'Étoile du Nord',
                        price: '4,30',
                        available: true
                    },
                    {
                        id: 'Rg8Zoy',
                        name: 'Orpal',
                        price: '4,40',
                        available: true
                    },
                    {
                        id: 'EwIJ38',
                        name: 'Amadeus',
                        price: '4,40',
                        available: true
                    }
                ],
                'repas': [
                    {
                        id: 'Ss718z',
                        name: 'Lasagnes',
                        price: '12,00',
                        available: true
                    },
                    {
                        id: 'cF14wS',
                        name: 'Boeuf Bourguignon',
                        price: '16,00',
                        available: false
                    },
                    {
                        id: 'o5uwH6',
                        name: 'Côte de boeuf',
                        price: '17,00',
                        available: true
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    h6{
        padding: 10px;
        cursor: pointer;
        text-transform: capitalize;
    }
    svg{
        cursor: pointer;
    }
</style>