<template>
    <div class="page__nav-box">
        <div class="page__nav clearfix">
            <router-link class="page__nav-logo" to="/pageIndex">
                <div class="logo__box">
                    <img class="logo__bg" src="../../images/logo-bg.png" />
                    <img class="logo" src="http://admin.lvshou.net/Uploads/logo/636252766211085961.png">
                </div>
            </router-link>
            <router-link class="page__nav-item" to="/pageIndex">
                <p>首页</p>
                <p>HOME</p>
            </router-link>
            <!-- <el-dropdown class="page__nav-item">
                <div>
                    <p>走进绿瘦</p>
                    <p>LVSHOW</p>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>董事长寄语</el-dropdown-item>
                    <el-dropdown-item>集团概况</el-dropdown-item>
                    <el-dropdown-item>企业介绍</el-dropdown-item>
                    <el-dropdown-item>集团荣誉</el-dropdown-item>
                    <el-dropdown-item>集团发展历程</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
            <router-link class="page__nav-item" to="/InCompany">
                <p>走进绿瘦</p>
                <p>LVSHOW</p>
            </router-link>
            <router-link class="page__nav-item" to="/ContactCom">
                <p>联系我们</p>
                <p>CONTACT US</p>
            </router-link>
            <!-- <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
            </el-dropdown> -->
            <!-- <router-link class="page__nav-item" to="/pageIndex">首页</router-link>
            <router-link class="page__nav-item" to="/articleNav">文章</router-link> -->
        </div>
    </div>
</template>

<script>
import UserInfo from '../UserInfo';
export default {
    data() {
        return {

        }
    },
    components: {
        UserInfo
    }
}
</script>

<style scoped>
@import '../../css/common/variable.css';
.page__nav-box {
    width: 100%;
    background: #fafafa;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
}
.page__nav {
    width: $pageWidth;
    height: 110px;
    margin: 0 auto;
    /* border: 1px solid black; */
}
.logo__box {
    width: 520px;
    height: 100%;
    /* border: 1px solid black; */
    overflow: hidden;
}
.logo__bg {
    position: relative;
    left: -240px;
    width: 755px;
    height: 110px;
}
.logo {
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -55px;
    width: 110px;
    height: 110px;
}
.page__nav-logo {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 520px;
    float: left;
}
.page__nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    float: left;
    text-align: center;
    cursor: pointer;
    padding:0 20px;
    box-sizing: border-box;
}
.page__nav-item:hover {
    border-bottom: 3px solid #3bae46;
    p {
        color: #3bae46;
    }
}
.main__box {
    width: $pageWidth;
    margin: 0 auto;
}
</style>
