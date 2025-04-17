<template>
    <div class="container">
        <form>
            <!---->
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="e_number" class="col-form-label">醫事機構代號</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="e_number" class="form-control">
                </div>
                <div class="col-auto">
                    <label for="nick" class="col-form-label">醫事機構簡稱</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="nick" class="form-control">
                </div>
                <div class="col-auto">
                    <label for="number" class="col-form-label">案件編號</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="number" class="form-control">
                </div>
            </div>
            <!---->
            <div class="row g-3 mt-1 align-items-center">
                <div class="col-auto">
                    <label for="sort" class="col-form-label">案件種類</label>
                </div>
                <div class="col-auto">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-secondary dropdown-toggle "
                            data-bs-toggle="dropdown" aria-expanded="false">
                            請選擇
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">生活</a></li>
                            <li><a class="dropdown-item" href="#">健康</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-auto">
                    <label for="number" class="col-form-label">未結案天數</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="number" class="form-control">
                </div>
                <div class="col-auto">
                    <label for="number" class="col-form-label">醫事機構代號</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="number" class="form-control">
                </div>
            </div>
            <!---->
            <div class="row g-3 mt-1 align-items-center">
                <div class="col-auto">
                    <label for="number" class="col-form-label">申請日期</label>
                </div>
                <div class="col-auto">
                    <VueDatePicker v-model="date" :range="{ minRange: 3 }" />
                </div>
                <div class="col-auto approval_date">
                    <label for="number" class="col-form-label">核定日期</label>
                </div>
                <div class="col-auto  approval_date_input">
                    <VueDatePicker v-model="date" :range="{ minRange: 3 }" />
                </div>
                <div class="col-auto person_label">
                    <label for="personNum" class="col-form-label">承辦人員ID</label>
                </div>
                <div class="col-auto person_input">
                    <input type="text" id="personNum" class="form-control">
                </div>

            </div>
            <!----->
            <div class="row g-3 mt-1 align-items-center">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">核定結果</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                    <label class="form-check-label" for="inlineCheckbox2">需要補正</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                    <label class="form-check-label" for="inlineCheckbox3">已補正</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                    <label class="form-check-label" for="inlineCheckbox3">退回承辦人</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                    <label class="form-check-label" for="inlineCheckbox3">審核</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4">
                    <label class="form-check-label" for="inlineCheckbox4">複審</label>
                </div>
            </div>

            <div class="row ">
                <div class="mt-1">
                    <button type="button" class="btn btn-secondary">Cancel</button>
                    <button type="button" class="btn btn-success ml-2">Success</button>
                </div>

            </div>
        </form>

    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref();

// onMounted(() => {
//     const startDate = new Date();
//     const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
//     date.value = [startDate, endDate];
// })
</script>

<style lang="scss" scoped>
.mt-3{
margin-top: 15px;
}
.ml-2{
    margin-left:15px
}
.col-form-label{
    width: 100px;
    text-align: left;
}
.btn-group .btn-outline-secondary,
.form-control,.dp__pointer,.dp__input_icon_pad{
    border:1px solid #009688;
}
.ml-6{
    margin-left: 30px
}
.dp__main {
    width: 84%;
}
.btn-group .btn-outline-secondary{
        width: 205px;
}
.form-check-inline{
    width: 12%;
}
.form-check{
    align-items: center;
    .form-check-input{
      width: 1.5em;
      height: 1.5em;
      border:1px solid #009688;
        
    }
        .form-check-label {
            align-items: center;
            margin-top: 5px;
            margin-left: 15px;
        }
}
.approval_date{
    margin-left: -35px;
}
.approval_date_input{
    margin-left: -15px;
}
.person_label{
    margin-left: -28px;
}
</style>