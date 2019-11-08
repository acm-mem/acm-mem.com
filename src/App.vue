<template>
    <div id="app">
        <div class="nav">
            <div class="logo-wrapper">
                <img alt="ACM Logo" src="../src/assets/acm-logo.png">
            </div>
            <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/Members">Members</router-link>
            </div>
        </div>
        <div class="content">
            <main id="main_content">
                <router-view/>
            </main>
        </div>
        <div class="footer">
            <p>&copy; 2019 ACM at University of Memphis</p>
            <div class="contribute">
                <a class="github-button" href="https://github.com/acm-mem/acm-mem.com/fork"
                   data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-repo-forked"
                   data-size="large"
                   data-show-count="true" aria-label="Fork acm-mem/acm-mem.com on GitHub">Contribute</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    html,
    body {
        position: relative;
        height: auto;
        min-height: 100vh !important;
    }

    body {
        background: rgba(0, 0, 0, 0.8);
        margin: 0;
        padding: 0;
        font-family: "SF Pro Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .nav {
        margin: 0 2em;
        min-height: 100px;
        position: relative;

        .links {
            margin: 1em auto;
            text-align: center;
            padding: 1em;

            a {
                color: white;
                font-weight: normal;
                text-decoration: none;
                font-size: 18px;
                border-right: 1px solid white;
                padding-right: 1em;
                padding-left: 1em;

                &:last-child {
                    border-right: none !important;
                }
            }
        }

        .logo-wrapper {
            max-width: 100px;
            margin: 1em auto;

            img {
                max-width: 100%;
            }
        }
    }

    .content {
        flex: 1;
        background-color: white;
        display: block;
        min-height: 60vh;
        padding: 2em 0;
        z-index: 20;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

        main#main_content {
            max-width: 60%;
            margin: 0 auto;
        }
    }

    .footer {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #171717;
        padding: 2em;
        z-index: 10;

        p {
            color: #959595;
            margin: 1.5rem;
            padding-bottom: 0.3rem;
        }

        img {
            margin-left: 2em;
            margin-right: 2em;
            max-width: 100px;
        }
    }

    .standard-hero {
        text-align: left !important;

        h1 {
            font-size: 1.8em;
            margin: 0;
        }

        h2 {
            font-size: 1em;
            color: lightgray;
            margin: 0;

            a {
                font-size: 1em;
                color: lightgray;
                text-decoration: none;
            }
        }
    }
</style>
