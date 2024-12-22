<template lang="">
    <button :class="buttonClass" @click="handleClick">
        {{ label }}

    </button>
</template>
<script>
export default {
    name: 'EButton',
    props: {
        label: {
            type: String,
            required: true,
        },
        onClick: {
            type: Function,
            required: true,
        },
        type : {
            type: String
            
        }
    },

    computed: {
        buttonClass() {
            switch (this.type){
                case 'pdf':
                    return 'btn pdf-btn';
                case 'excel':
                    return 'btn excel-btn';
                case 'csv':
                    return 'btn csv-btn';
                default:
                    return 'btn'
            }
        }
    },
    methods: {
        handleClick(){
            this.onClick();
        }
    }
    
}
</script>
<style scoped>

    .btn {
        background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: rgb(244, 248, 244);
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  margin:5px;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


    }

    .excel-btn:hover {
        
        box-shadow: rgb(8, 247, 100) 0 -25px 18px -14px inset;
  transform: scale(1.05) translateY(-4px);
    }

    .csv-btn:hover {
        
        box-shadow: rgba(166, 196, 32, 0.993) 0 -25px 18px -14px inset;
  transform: scale(1.05) translateY(-4px);
    }
    .pdf-btn:hover {
        
        box-shadow: rgb(255, 0, 0) 0 -25px 18px -14px inset;
  transform: scale(1.05) translateY(-4px);
    }
    
    .pdf-btn {
     background-color: #d9534f;
        
    }
    .excel-btn {
        background-color: #28a745;
    }
    .csv-btn {
        background-color: rgb(231, 231, 4);
    }
    
</style>