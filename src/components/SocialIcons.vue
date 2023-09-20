// SocialIcons.vue

<template>

    <div class="social-icons flex justify-between text-white">

        <a href="tel:+16475001747">
            <button class="icon-btn">
                    <font-awesome-icon :icon="['fas', 'phone']" size="1x" />
            </button>
        </a>

        <a href="https://www.facebook.com/people/North-Simcoe-Property-Management/100091986706375/?mibextid=D4KYl">
            <button class="icon-btn">
                    <font-awesome-icon
                        :icon="['fab', 'facebook-f']" size="1x"
                    />
            </button>
        </a>

        <a href="https://instagram.com/northsimcoe_propertymanagement?igshid=MzRlODBiNWFlZA==">
            <button class="icon-btn">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="1x" />
            </button>
        </a>


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
    width: 50px;
    height: 50px;
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

.social-icons{
    width: 250px;
}

@media screen and (max-width: 612px) {
    .social-icons{
        width: 90%;
    }

}

</style>