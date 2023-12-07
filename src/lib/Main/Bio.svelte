<script lang="ts">
  import me from "../../assets/me.jpeg";
  const yearsProgrammed = Math.max(new Date().getFullYear() - 2016, 7);
</script>

<div class="w-10/12 text-center mx-auto">
    <!-- <img class="profile" src={me} alt="Profile pic"> -->
    <p>I'm a Computer Science student with {yearsProgrammed}+ years of full-stack programming experience.</p>
    <p>Self-taught developer and 3D graphics artist with pro bono experience in everything from Web Development to Machine Learning to Virtual Reality.</p>
    <br />
    <p>I have a wide range of interests and try to expand my skills in as many technologies as possible.</p>
    <p>This site is intended as a place for me to publish and document some of my projects and endeavours. Happy browsing :)</p>
</div>

<style>
  .profile {
    display: inline-block;
    margin: 1em;
    border-radius: 50%;
    width: 10em;
    outline: 2px solid var(--mauve);
    box-shadow: 0 0 10px #000000;
  }

  p {
    font-family: "Jost";
    font-size: 1.2rem;
  }
</style>