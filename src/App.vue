<template>
    <div id="app">
        <div class="row">
            <div class="col-6">
                <h2>{{ title }}</h2>
                <div>
                    Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
                    <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
                </div>
                <b-table
                        :items="chemicals.data"
                        :fields="fields"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :select-mode="selectMode"
                        @row-selected="onRowSelected"
                        sort-icon-left
                        responsive="sm"
                        hover
                        striped
                        selectable
                        small
                ></b-table>
            </div>
            <div class="col-6" v-if="selected[0]">
                <h2>{{ selected.PREFERRED_NAME }}</h2>
                <ul>
                    <li v-for="(item) in selected[0].DETAILS" :key="item.id">
                        <h3>Score {{ item.Score }}</h3>
                        <ul>
                            <li>Differential Metric: {{ item.differential_metric }}</li>
                            <li v-if="item.gen_cat">PUC: {{ item.gen_cat }}</li>
                            <li v-if="item.puc_id">PUC_ID: {{ item.puc_id }}</li>
                            <li v-if="item.Name">Name: {{ item.Name }}</li>
                            <li>Product ids: {{ item.Product_ids }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                title: "My Chemical List",
                sortBy: 'SCORE',
                sortDesc: false,
                selected: [],
                modes: ['multi', 'single', 'range'],
                selectMode: 'single',
                chemicals: null,
                chemical: null,
                details: null,
                fields: [
                    {key: 'PREFERRED_NAME', label: 'Chemical', sortable: true},
                    {key: 'DTXSID', sortable: false},
                    {key: 'SCORE', label: 'Score', sortable: true}
                ],
            }
        },
        mounted() {
            axios
                .get('http://localhost:3000/chemicals')
                .then(response => (this.chemicals = response));
        },
        methods: {
            onRowSelected(chemical) {
                this.selected = chemical;
            }
        }
    }
</script>


