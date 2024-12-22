<template lang="">
    <form>
        
        <div class="search-bar" >
            <input type="text" @input="search" placeholder="Search for Account Holder or Transaction type"  class="searchInput"/>
        </div>
    </form>
</template>
<script setup>

const emit = defineEmits(['search'])

const search = (e) => {
    emit('search', e.target.value);
}

</script>
<style scoped>
.search-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;

}

.searchInput {
    width: 100%;
    max-block-size: 400px;
    padding: 12px 20px;
    border: 2px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.searchInput:focus {
    border-color: #4e22ec;
    box-shadow: 0 4px 10px rgba(80, 11, 177, 0.5)
}

.searchInput::placeholder{
    color: #796b6b;
    font-style: italic;
}


    
</style>