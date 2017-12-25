<template>
 <nav class="paradeiser">
   <a href="#">
        <icon class="paradeiser_icon_canvas">
            <img src="../assets/ic_home.svg" alt="Navigate to Home">
        </icon>
        <span>Home</span>
    </a>
    <a href="#">
        <icon class="paradeiser_icon_canvas">
            <img src="../assets/ic_schedule.svg" alt="Navigate to Schedule">
        </icon>
        <span>Schedules</span>
    </a>
   <a href="#">
        <icon class="paradeiser_icon_canvas">
            <img src="../assets/ic_member.svg" alt="Navigate to Members">
        </icon>
        <span>Members</span>
    </a>

</nav>
</template>
<script>
export default {
  mounted() {
    $(".button-collapse").sideNav({
      menuWidth: 200,
      closeOnClick: true
    });
  }
};
</script>
