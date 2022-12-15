<template>
    <div>
        <div class="flex justify-center">
            <p class="pt-1 pb-1.5 px-3 rounded-xl text-sm bg-orange-600 text-white">
                <slot name="header"></slot>
            </p>
        </div>
        <div class="nunito">
            <p class="text-center mt-2 mb-3 font-bold">
                <slot name="question"></slot>
            </p>
        </div>
    </div>
</template>