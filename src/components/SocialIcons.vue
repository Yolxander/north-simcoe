// SocialIcons.vue

<template>

    <div class="social-icons w-[300px] flex justify-between">

        <button class="icon-btn">
            <font-awesome-icon :icon="['fas', 'phone']" size="2x"/>
        </button>

        <button class="icon-btn">
            <font-awesome-icon
                :icon="['fab', 'facebook-f']" size="2x"
            />
        </button>

        <button class="icon-btn">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
        </button>


    </div>

</template>


<script>

export default {
    name: 'SocialIcons'
}
</script>


<style>

/*.container {*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    left: 50%;*/
/*    transform: translate(-50%, -50%);*/
/*    width: 300px;*/
/*}*/

button {
    width: 70px;
    height: 70px;
    margin: 20px;
    outline: none;
    border: none;
    background: #d6d6d6;
    box-shadow: 5px 5px 10px #b6a9a9, -5px -5px 10px #ffffff;
    border-radius: 50%;
    transition: 0.2;
}

button:hover {
    cursor: pointer;
    animation-name: pulse;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
@keyframes pulse {
    from {
        transform: scale(1);
    }
    50% {
        transform: scale(1.21);
    }
    to {
        transform: scale(1);
    }
}

</style>