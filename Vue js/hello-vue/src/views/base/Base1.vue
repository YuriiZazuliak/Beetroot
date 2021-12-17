<template>
    <section id="app3">
        <h1>Second section {{name}}</h1>
    </section>
</template>
<script>
export default {
    name: "base1",
    el: "#app3",
    data: () => ({        
        name: "hello!!!",
        version: "2.34.12.3",
            
    })
}
</script>
<style scoped>

</style>
