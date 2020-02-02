<template>
    <div id="app">
        <div class="row">
            <div class="col-8">
                <MyGrid />
            </div>
            <div class="col-4">
                <ChemicalDetail />
            </div>
        </div>
    </div>
</template>

<script>
import MyGrid from "@/components/MyGrid";
import ChemicalDetail from "@/components/ChemicalDetail";

  export default {
    name: 'app',
    components: {
      MyGrid, ChemicalDetail
    }
  }
</script>


