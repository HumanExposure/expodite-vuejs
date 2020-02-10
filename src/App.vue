<template>
    <div id="app">
        <div class="row">
            <div class="col-6">
                <h2>{{ title }}</h2>
                <div>
                    Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
                    <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
                </div>
                <b-table class="shadow-lg"
                         style="background-color: white"
                        :items="chemicals.chemicals"
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
                <h3>{{ selected[0].PREFERRED_NAME }}</h3>
                <ul>
                    <div v-for="(item) in selected[0].DETAILS" :key="item.id">
                        <b-card class="shadow" style="margin-bottom: 15px">
                        <b-card-title>{{ item.differential_metric}}</b-card-title>
                            <b-card-sub-title>Score: {{ item.Score}} </b-card-sub-title>
                            <b-card-text v-if="item.gen_cat">PUC: {{ item.gen_cat }}</b-card-text>
                            <b-card-text v-if="item.puc_id">PUC_ID: {{ item.puc_id }}</b-card-text>
                            <b-card-text v-if="item.Name">Name: {{ item.Name }}</b-card-text>
                            <b-card-text>Product ids: {{ item.Product_ids }}</b-card-text>
                        </b-card>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Chemicals from "../public/chemical_score_details"

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
                chemicals: Chemicals,
                chemical: null,
                details: null,
                fields: [
                    {key: 'PREFERRED_NAME', label: 'Chemical', sortable: true},
                    {key: 'DTXSID', sortable: false},
                    {key: 'SCORE', label: 'Score', sortable: true}
                ],
            }
        },
        methods: {
            onRowSelected(chemical) {
                this.selected = chemical;
            }
        }
    }
</script>

<style>
    b-card:
</style>

