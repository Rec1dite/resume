<!-- Index -->
<table class="index">
    <tr><td> <a href="#about">About me</a>          </td></tr>
    <tr><td> <a href="#projects">Projects</a>       </td></tr>
    <tr><td> <a href="#games">Games</a>             </td></tr>
    <tr><td> <a href="#graphics">Graphics</a>       </td></tr>
    <tr><td> <a href="#contact">Contact</a>         </td></tr>
</table>

<style>
    .index {
        width: 100%;
        margin-left: 2vw;
    }

    .index tr {
        padding: 0px;
        margin: 0px;
        height: min-content;
    }

    .index td {
        color: white;
        transition: transform 0.1s ease-in-out;
        line-height: 0;
    }
    .index td a {
        position: relative;

        font-family: "Jost";
        font-size: 2vw;
        line-height: 2.4vw;
    }
    .index td:hover {
        color: var(--blue);
        transform: scale(1.05);
        /* text-decoration: underline var(--text); */
    }

    .index td a::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 0.2vw;
        bottom: 0;
        left: 0;
        background-color: var(--sapphire);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .index td:hover a::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

</style>