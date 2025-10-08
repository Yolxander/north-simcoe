// SocialIcons.vue

<template>

    <div class="social-icons flex justify-between text-white">

        <a href="tel:+16475001747">
            <button class="icon-btn">
                    <font-awesome-icon :icon="['fas', 'phone']" size="1x" />
            </button>
        </a>

        <a href="https://www.facebook.com/share/1FdDUTEdVB/?mibextid=wwXIfr">
            <button class="icon-btn">
                    <font-awesome-icon
                        :icon="['fab', 'facebook-f']" size="1x"
                    />
            </button>
        </a>

        <a href="https://www.instagram.com/northsimcoe_propertymanagement?igsh=NHVzNWUwdTE4OTcx&utm_source=qr">
            <button class="icon-btn">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="1x" />
            </button>
        </a>

        <a href="https://www.youtube.com/@NorthSimcoePropertyManagement/shorts">
            <button class="icon-btn">
                  <font-awesome-icon :icon="['fab', 'youtube']" size="1x" />
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