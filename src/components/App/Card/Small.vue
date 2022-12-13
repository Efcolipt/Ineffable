<template>
    <div class="card">
        <div class="card__image">
            <NuxtImg src="https://www.rentaphoto.ru/upload/resize_cache/iblock/05a/lpuoylyl13kexris1kh3ypf5umo2g53t/450_450_1/6e690028-b887-11eb-4e9b-78542e6ffaa2_8d50ed6c-ba2a-11eb-4e9b-78542e6ffaa2.jpg" />
            <div class="card__rating">
                <span class="text-md">
                    7.6
                </span>
            </div>
        </div>
        <div class="card__title">
            <h3 class="headline-md">
                Это — Англия. Год 1986 ajsdhoiadfjoiasj ifosaf ioahsouj
            </h3>
        </div>
        <div class="card__info">
            <p class="text-md text-md--blur">
                1 сезон, 1 серия
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card {
    max-width: 324px;
    &__title{
        margin-bottom: 8px;

        h3 {
            -webkit-line-clamp: 2;
            display: -webkit-box; 
            -webkit-box-orient: vertical;
            overflow: hidden; 
        }
    }

    &__image{
        max-height: 324px;
        margin-bottom: 16px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }

    &__rating{
        position: absolute;
        width: 43px;
        height: 35px;
        background-color: $secondaryDarkColor;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 20px;
        top: 18px;

        span {
            font-weight: bold;

            &--green {
                color: $secondaryGreenColor;
            } 
            
            &--gray {
                color: $secondaryLightGrayColor;
            } 
        }
    }

}
</style>