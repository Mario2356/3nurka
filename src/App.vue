<template>
  <div id="app">
    <HeaderRow/>


    <router-view/>
    <FooterRow/>
    </div>
</template>

<style>

</style>
<script>
import FooterRow from "@/components/FooterRow";
import HeaderRow from "@/components/HeaderRow";


export default {
  components: {HeaderRow, FooterRow}

}
</script>