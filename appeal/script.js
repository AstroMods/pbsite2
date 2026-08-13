const form = document.getElementById("appealForm");

const submitButton = document.getElementById("submitButton");
const buttonText = document.getElementById("buttonText");
const buttonLoader = document.getElementById("buttonLoader");

const statusBox = document.getElementById("status");


// ==============================
// DISCORD WEBHOOK
// ==============================

const DISCORD_WEBHOOK =
    "https://discord.com/api/webhooks/1537526539888099478/tsZ54mL5MC7LQ9PadUPWKzgJgMgLQRdgWR5PVfjVnbNZlMt7KkElUAlrf1YpehyYvAQL";


// ==============================
// FORM SUBMISSION
// ==============================

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const playerName =
        document.getElementById("playerName").value.trim();

    const discord =
        document.getElementById("discord").value.trim();

    const license =
        document.getElementById("license").value.trim();

    const banReason =
        document.getElementById("banReason").value.trim();

    const appeal =
        document.getElementById("appeal").value.trim();

    const agreement =
        document.getElementById("agreement").checked;


    // ==============================
    // VALIDATION
    // ==============================

    if (
        !playerName ||
        !discord ||
        !license ||
        !banReason ||
        !appeal
    ) {

        showStatus(
            "Please complete all required fields.",
            "error"
        );

        return;
    }


    if (appeal.length < 50) {

        showStatus(
            "Your appeal must contain at least 50 characters.",
            "error"
        );

        return;
    }


    if (!agreement) {

        showStatus(
            "Please confirm that the information provided is truthful.",
            "error"
        );

        return;
    }


    // ==============================
    // LOADING
    // ==============================

    submitButton.disabled = true;

    buttonText.textContent = "Submitting...";

    buttonLoader.classList.remove("hidden");

    statusBox.classList.add("hidden");


    // ==============================
    // DISCORD EMBED
    // ==============================

    const payload = {

        username: "Palm Beach Project",

        avatar_url:
            "https://cdn.discordapp.com/embed/avatars/0.png",

        embeds: [

            {

                title: "🚨 New Ban Appeal",

                description:
                    "A new ban appeal has been submitted through the Palm Beach Project website.",

                color: 2384209,

                fields: [

                    {
                        name: "👤 Player Name",
                        value: playerName,
                        inline: true
                    },

                    {
                        name: "💬 Discord",
                        value: discord,
                        inline: true
                    },

                    {
                        name: "🔑 FiveM License",
                        value: `\`${license}\``,
                        inline: false
                    },

                    {
                        name: "⚠️ Ban Reason",
                        value: banReason,
                        inline: false
                    },

                    {
                        name: "📝 Appeal",
                        value: appeal,
                        inline: false
                    }

                ],

                footer: {

                    text:
                        "The Palm Beach Project • Ban Appeals"

                },

                timestamp:
                    new Date().toISOString()

            }

        ]

    };


    // ==============================
    // SEND TO DISCORD
    // ==============================

    try {

        const response = await fetch(
            DISCORD_WEBHOOK,
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(payload)

            }
        );


        if (!response.ok) {

            throw new Error(
                `Discord returned ${response.status}`
            );

        }


        // ==============================
        // SUCCESS
        // ==============================

        form.reset();

        showStatus(
            "Your ban appeal has been submitted successfully. Our staff team will review it.",
            "success"
        );


    } catch (error) {

        console.error(
            "Discord Webhook Error:",
            error
        );

        showStatus(
            "Your appeal could not be submitted. Please try again later.",
            "error"
        );

    }


    // ==============================
    // RESET BUTTON
    // ==============================

    submitButton.disabled = false;

    buttonText.textContent =
        "Submit Ban Appeal";

    buttonLoader.classList.add("hidden");

});


// ==============================
// STATUS MESSAGE
// ==============================

function showStatus(message, type) {

    statusBox.textContent = message;

    statusBox.className =
        `status ${type}`;

    statusBox.classList.remove("hidden");

}
