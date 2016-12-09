

<template>
  <div id="nav-node">
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <router-link to="/Hello">管理A</router-link>
        </li>
        <li>
          <router-link to="/test">管理B</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style lang="scss">

  #nav-node {
    width: 200px;
    position: relative;
    display: block;
    padding: 50px 0px 50px 20px;
    .menu{

      .menu-list{

        li{
          background-color: white;
          max-width: 83%;
          border: 1px solid #ccc;
          margin-bottom: 10px;

          >a{
            border-radius: 2px;
            color: #4a4a4a;
            display: block;
            padding: 5px 10px;
            box-shadow: 0px 0px 15px #ccc;
          }
        }

      }

    }
  }
</style>
