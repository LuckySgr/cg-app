<template>
  <div class="home-container">
    <a-layout>
      <a-layout-header>
        <span>CG-App</span>
        <div>
          <a-dropdown trigger="hover" placement="bottom">
            <span class="el-dropdown-link">
              <desktop-outlined/>
            </span>
            <template #overlay>
              <a-menu @click="dropdownChange">
                <a-menu-item key="loginOut">
                  <desktop-outlined/>
                  退出
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="150px">
          <a-menu theme="dark"
                  :mode="'inline'"
                  :open-keys="openKeys"
                  :selectedKeys="[selectedKeys]"
                  @openChange="onOpenChange">
            <a-sub-menu v-for="item in menuList" :key="item.id">
              <template #title>
                <codepen-outlined style="font-size: 18px"/>
                <span>{{ item.menuName }}</span>
              </template>
              <a-menu-item v-for="item2 in item.children" :key="'/'+item2.menuRoute"
                           @click="activeKey('/'+item2.menuRoute)">
                <span> {{ item2.menuName }}</span>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <RouterView/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {menuList} from "@/assets/js/menuList";
import {FullscreenExitOutlined, FullscreenOutlined, DesktopOutlined, CodepenOutlined} from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
import router from '../router'

export default {
  name: 'Home',
  components: {
    FullscreenExitOutlined,
    FullscreenOutlined,
    DesktopOutlined,
    CodepenOutlined
  },
  data() {
    return {
      menuList: [],
      collapsed: false,
      isHide: false,
      openKeys: [],
      selectedKeys: []
    }
  },
  created() {
    this.menuList = menuList
    this.selectedKeys = window.sessionStorage.getItem('selectedKeys');
    let item = window.sessionStorage.getItem('openKeys');
    this.openKeys = item ? [parseInt(item)] : [];
  },
  methods: {
    dropdownChange(value) {
      switch (value.key) {
        case 'loginOut':
          this.loginOut()
          break
      }
    },
    //退出登录
    loginOut() {
      window.sessionStorage.removeItem('startActivation');
      window.sessionStorage.removeItem('selectedKeys');
      window.sessionStorage.removeItem('openKeys');
      router.push({path: '/'})
      message.success("See You Later")
    },
    onOpenChange(openKeys) {
      if (openKeys.length !== 0) {
        this.openKeys = [openKeys[openKeys.length - 1]]
      } else {
        this.openKeys = []
      }
      // 保存当前选中的父菜单，用于刷新时重现
      window.sessionStorage.setItem('openKeys', this.openKeys);
    },
    //点击导航，有激活的状态
    activeKey(path) {
      router.push(path)
      this.selectedKeys = path
      // 保存当前选中的子菜单，用于刷新时重现
      window.sessionStorage.setItem('selectedKeys', path);
    }
  }
}
</script>

<style scoped>
.home-container {
  height: 100%;
}

.ant-layout {
  height: 100%;
}

.ant-layout-header {
  background: #001529;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
}

</style>
