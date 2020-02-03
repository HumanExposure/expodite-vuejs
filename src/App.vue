<template>
    <div id="app">
        <div class="row">
            <div class="col-8">
                <ChemicalGrid></ChemicalGrid>
            </div>
            <div class="col-4">
                <ChemicalDetail></ChemicalDetail>
            </div>
        </div>
    </div>
</template>

<script>
import ChemicalGrid from "./components/ChemicalGrid"
import ChemicalDetail from "./components/ChemicalDetail"


  export default {
    name: 'app',
    components: {
      ChemicalGrid, ChemicalDetail
    },
  }
</script>


