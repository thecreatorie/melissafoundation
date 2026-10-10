/*
 * Contact form handler for The Melissa Foundation.
 *
 * This site is hosted on GitHub Pages, which serves static files only and
 * cannot process form posts. To make the form deliver mail, create a free
 * form endpoint (e.g. Formspree at https://formspree.io) and paste its URL
 * below. Until then the form falls back to opening the visitor's email app
 * with the message pre-filled, so nothing is lost.
 */
var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxxx"
var FALLBACK_EMAIL = "donate@themelissafoundation.org";

(function () {
	var form = document.getElementById("contactForm");
	if (!form) return;
	var note = document.getElementById("contactFormMessage");

	function show(kind, html) {
		note.className = "form-message is-" + kind;
		note.innerHTML = html;
		note.scrollIntoView({ behavior: "smooth", block: "center" });
	}

	function mailtoLink(d) {
		var body =
			"Name: " + d.name + "\n" +
			"Email: " + d.email + "\n" +
			"Phone: " + (d.phone || "-") + "\n" +
			"Interest: " + d.topic + "\n\n" +
			d.message;
		return "mailto:" + FALLBACK_EMAIL +
			"?subject=" + encodeURIComponent("Website enquiry: " + d.topic) +
			"&body=" + encodeURIComponent(body);
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		var data = {
			name: form.name.value.trim(),
			email: form.email.value.trim(),
			phone: form.phone.value.trim(),
			topic: form.topic.value,
			message: form.message.value.trim()
		};

		if (form._gotcha.value) return; // honeypot: silently ignore bots

		if (!data.name || !data.email || !data.message) {
			show("error", "Please fill in your name, email address and a message.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
			show("error", "Please enter a valid email address.");
			return;
		}

		if (!FORM_ENDPOINT) {
			show("info",
				"This form isn't connected to an inbox yet. " +
				"<a href='" + mailtoLink(data) + "'>Click here to send your message by email</a>, " +
				"or write to <a href='mailto:" + FALLBACK_EMAIL + "'>" + FALLBACK_EMAIL + "</a>.");
			return;
		}

		var btn = form.querySelector("button[type=submit]");
		var label = btn.innerHTML;
		btn.disabled = true;
		btn.innerHTML = "Sending...";

		fetch(FORM_ENDPOINT, {
			method: "POST",
			headers: { "Accept": "application/json" },
			body: new FormData(form)
		}).then(function (res) {
			if (!res.ok) throw new Error(res.status);
			form.reset();
			show("success", "Thank you &mdash; your message is on its way. We'll be in touch soon.");
		}).catch(function () {
			show("error",
				"Sorry, something went wrong sending your message. " +
				"Please email us at <a href='mailto:" + FALLBACK_EMAIL + "'>" + FALLBACK_EMAIL + "</a>.");
		}).then(function () {
			btn.disabled = false;
			btn.innerHTML = label;
		});
	});
})();
