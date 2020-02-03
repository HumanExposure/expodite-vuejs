<template>
    <div>
        <h2>{{ chemical.DTXSID }}</h2>
    </div>
</template>

<script>
    export default {
        name: "ChemicalRow",
        props: {
            chemical: Object
        }
    }
</script>

<style scoped>

</style>
