"use strict";

// Menu
document.querySelectorAll("[data-toggle]").forEach(function (el) {
  el.onclick = function () {
    if (document.querySelector('[data-toggle][data-active="true"]') != el) {
      document.querySelector('[data-toggle][data-active="true"]').dataset.active = "false";
      el.dataset.active = "true";
      document.querySelector("section.visible").classList.remove("fade");
      setTimeout(function () {
        document.querySelector("section.visible").classList.remove("visible");
        document.querySelector(el.dataset.toggle).classList.add("visible"); // Opacity animation will not display if it's triggered at the same as the display changes to "block". So we have to delay it a bit

        setTimeout(function () {
          document.querySelector(el.dataset.toggle).classList.add("fade");
        }, 30);
      }, 200);
    }
  };
});
document.querySelectorAll("[data-toggleMenu]").forEach(function (el) {
  el.onclick = function () {
    document.querySelector("[data-toggle=\"".concat(el.dataset.togglemenu, "\"]")).onclick.apply();
  };
}); // Randomize background position on each visit

var mainElement = document.getElementsByTagName("main")[0];
mainElement.style.backgroundPosition = "".concat(Math.floor(Math.random() * 101), "% ").concat(Math.floor(Math.random() * 101), "%"); // Generate numbers from 0 to 100
// Detect WebP support

!function (e) {
  "use strict";

  var n = function n(e) {
    var n = new Image();
    n.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA", n.onload = n.onerror = function () {
      e(2 === n.height);
    };
  },
      t = function t(n) {
    if (!n) {
      e.body.classList.remove("webp");
    }
  };

  e.addEventListener("DOMContentLoaded", n(t));
}(document); // Project details

document.querySelectorAll("[data-project]").forEach(function (el) {
  el.onclick = function () {
    document.querySelector(".project-details[data-project=\"".concat(el.dataset.project, "\"]")).classList.add("visible", "fade");
    document.body.classList.add("no-scroll");
    document.querySelectorAll('main a, .dropdown').forEach(function (mainEl) {
      mainEl.setAttribute("tabindex", "-1");
    });
  };
});
document.querySelectorAll(".proj-det-exit").forEach(function (el) {
  el.onclick = function () {
    document.body.classList.remove("no-scroll");
    el.closest(".project-details").classList.remove("fade");
    document.querySelectorAll('main a, .dropdown').forEach(function (mainEl) {
      mainEl.setAttribute("tabindex", "0");
    });
    setTimeout(function () {
      el.closest(".project-details").classList.remove("visible");
    }, 300);
  };
});
document.querySelectorAll(".project-details").forEach(function (el) {
  el.onclick = function () {
    document.body.classList.remove("no-scroll");
    el.classList.remove("fade");
    document.querySelectorAll('main a, .dropdown').forEach(function (mainEl) {
      mainEl.setAttribute("tabindex", "0");
    });
    setTimeout(function () {
      el.classList.remove("visible");
    }, 300);
  };
});
document.querySelectorAll(".project-details-container").forEach(function (el) {
  el.onclick = function () {
    event.stopPropagation();
  };
}); // Language changer

function changeLanguage(lang, anim) {
  document.querySelectorAll("[data-string]").forEach(function (el) {
    if (anim) {
      el.classList.add("fadeOut");
      setTimeout(function () {
        el.innerHTML = langStrings[el.dataset.string][lang];
        el.classList.remove("fadeOut");
      }, 300);
    } else {
      el.innerHTML = langStrings[el.dataset.string][lang];
    }
  });

  if (lang == "pol") {
    document.documentElement.lang = "pl";
  } else {
    document.documentElement.lang = "en";
  }
}

document.querySelectorAll("[name=language]").forEach(function (el) {
  el.onchange = function () {
    changeLanguage(el.value, true);
  };
});
document.querySelectorAll("header label").forEach(function (el) {
  el.onclick = function () {
    document.querySelector("header input#".concat(el.getAttribute("for"))).checked = true;
    changeLanguage(el.getAttribute("for"), true);
  };
});
var langStrings = {
  menuHome: {
    eng: "Home",
    pol: "Strona główna"
  },
  menuAbout: {
    eng: "About",
    pol: "O mnie"
  },
  menuProjects: {
    eng: "Projects",
    pol: "Projekty"
  },
  menuLanguage: {
    eng: "Language",
    pol: "Język"
  },
  homeDescription1: {
    eng: "Hi! I'm Jakub and I'm from Poland.",
    pol: "Cześć! Mam na imię Jakub i jestem z Polski."
  },
  homeDescription2: {
    eng: "I am a self-taught junior front-end web developer, with a goal to become a full-stack web developer. I'm always looking for opportunities to learn something new and to challenge myself.",
    pol: "Jestem junior front-end web developerem-samoukiem. Dążę, by zostać full-stack web developerem. Zawsze szukam okazji, by nauczyć się czegoś nowego lub by podjąć się wyzwania."
  },
  homeProjectsBtn: {
    eng: "Check out my projects!",
    pol: "Sprawdź moje projekty!"
  },
  aboutHeading: {
    eng: "About me",
    pol: "O mnie"
  },
  projectsHeading: {
    eng: "Projects",
    pol: "Projekty"
  },
  projectDetailsViewBtn: {
    eng: "View live",
    pol: "Zobacz stronę"
  },
  projectDetailsGithubBtn: {
    eng: "View on Github",
    pol: "Zobacz na Githubie"
  },
  projectDetailsDesignSource: {
    eng: "Original design by ",
    pol: "Twórca oryginalnego designu: "
  },
  planetAbhi_ShortDesc: {
    eng: "A site created for a fictional website about fashion.",
    pol: "Strona zrobiona dla fikcyjnej strony o modzie."
  },
  planetAbhi_Desc1: {
    eng: "A site created for a fictional website about fashion. Built to practice creating static sites based on PSD designs.",
    pol: "Strona zrobiona dla fikcyjnej strony o modzie. Zrobiłem ją, by przećwiczyć tworzenie statycznych stron na podstawie designu w PSD."
  },
  planetAbhi_Desc2: {
    eng: "This site uses CSS prefers-color-scheme! If your device's preferences are set to use dark color theme, the site will change its colors to respect that.",
    pol: "Ta strona używa CSS prefers-color-scheme! Strona reaguje na to, czy preferencje twojego urządzenia są ustawione tak, by używać ciemnego motywu."
  },
  planetAbhi_Desc3: {
    eng: "Displays well on devices of any screen width, has a fullscreen menu for small screens and has a carousel with automatic scrolling.",
    pol: "Wyświetla się dobrze na urządzeniach o dowolnej szerokości ekranu, ma pełnoekranowe menu dla małych ekranów i ma karuzelę obrazków z automatycznym przewijaniem."
  },
  tf2Unboxer_ShortDesc: {
    eng: "A Team Fortress 2 crate simulator. Originally released in late 2018. My largest project yet.",
    pol: "Symulator skrzynek z Team Fortress 2. Pierwszą wersję wydałem na końcu 2018. Mój największy do tej pory projekt."
  },
  tf2Unboxer_Desc1: {
    eng: "This is a Progressive Web App, which simulates opening crates and cases in Team Fortress 2.",
    pol: "To jest aplikacja PWA, która symuluje otwieranie skrzyenk w Team Fortress 2."
  },
  tf2Unboxer_Desc2: {
    eng: "My largest project yet, I spent hundreds of hours working on it. It provided me with many interesting challenges and it certainly taught me a lot about web development.",
    pol: "Dotychczas jest to mój największy projekt. Spędziłem mnóstwo czasu, pracując nad nim. Dzięki temu projektowi napotkałem wiele interesujących wyzwań i nauczyłem się wiele rzeczy o programowaniu webowym."
  },
  tf2Unboxer_Desc3: {
    eng: "As a PWA, the site caches files for better performance and offline capability. It can also be installed on the user's device.",
    pol: "Jako PWA, strona zapisuje pliki w pamięci podręcznej dla lepszej wydajności i możliwości używania strony offline. Stronę można też zainstalować na swoim urządzeniu."
  },
  tf2Unboxer_Desc4: {
    eng: "This project received a version 2.0 update in November 2020, which included a nearly complete code rewrite, performance improvements and many other new features.",
    pol: "Ten projekt otrzymał aktualizację 2.0 w listopadzie 2020, w którym prawie całkowite napisano kod od nowa, poprawiono wydajność i dodano wiele innych funkcji."
  },
  builderIo_ShortDesc: {
    eng: "A site created for a fictional web-based online website builder, based on a PSD design.",
    pol: "Strona zrobiona dla fikcyjnego przeglądarkowego kreatora stron, na podstawie designu w PSD."
  },
  builderIo_Desc1: {
    eng: "A site created for a fictional web-based online website builder. Built to practice creating static sites based on PSD designs.",
    pol: "Strona zrobiona dla fikcyjnego przeglądarkowego kreatora stron. Zrobiłem ją, by przećwiczyć tworzenie statycznych stron na podstawie designu w PSD."
  },
  builderIo_Desc2: {
    eng: "Displays well on devices of any screen width, has menu/button animations and uses compressed images to reduce size as much as possible without sacrificing too much image quality.",
    pol: "Wyświetla się dobrze na urządzeniach o dowolnej szerokości ekranu, ma animacje menu/przycisków i używa obrazów obraz skompresowanych tak, by zajmowały jak najmniej miejsca, nie zmniejszając za bardzo jakości."
  },
  greenerClicker_ShortDesc: {
    eng: "A short and silly incremental game, created in under 72 hours for Clicker Jam 2.",
    pol: "Krótka, zabawna gra typu incremental, stworzona w 72 godzin podczas Clicker Jam 2."
  },
  greenerClicker_Desc1: {
    eng: "A short and silly incremental game, created in under 72 hours for Clicker Jam 2.",
    pol: "Krótka, zabawna gra typu incremental, stworzona w 72 godzin podczas Clicker Jam 2."
  },
  greenerClicker_Desc2: {
    eng: 'Albeit small, this was one of the more exciting projects to me, mainly due to the strict time limit. I had only 72 hours to make a working incremental game that fits the game jam\'s theme (which was "Green") and I had no experience making incremental games in the past. What could possibly go wrong?',
    pol: 'Mimo małych rozmiarów, dla mnie to był jeden z bardziej ekscytujących projektów, głównie przez ścisły limit czasowy. Miałem tylko 72 godzin, by zrobić działającą grę typu incremental, która pasowała do tematu game jamu (którym było słowo "Green"), a nigdy wcześniej takiej gry nie robiłem. Co mogło pójść nie tak?'
  },
  greenerClicker_Desc3: {
    eng: 'I had so many ideas which I wanted to implement but I had abandon them as I wouldn\'t make it before the deadline. Once I sent the game to the jam, I missed one small bug - the playtime wouldn\'t display correctly on the ending pop-up. All because I forgot to type one "0". If I only had one more day, I could\'ve done so much more.',
    pol: "Miałem dużo pomysłów, które chciałem dodać, ale musiałem je porzucić, bo inaczej nie zdążyłbym przed deadlinem. Gdy wysłałem ostatnią wersję gry do jamu, umknął mi jeden mały bug - po ukończeniu gry, ona miała pokazać, w jakim czasie gracz ukończył grę, lecz gra nie pokazywała tego poprawnie, wszystko przez to, że zapomniałem dopisać jedno zero. Gdybym tylko miał jeszcze jeden dzień, dałbym radę zrobić jeszcze więcej."
  },
  greenerClicker_Desc4: {
    eng: "I'm considering returning to this project at some point to give it more polish, add some QoL improvements, make it mobile-friendly and maybe even add a bit more content.",
    pol: "Myślę, by kiedyś powrócić do tego projektu by go podszlifować, dodać parę usprawnień QoL, ulepszyć wsparcie dla telefonów, a może nawet dodać nową zawartość."
  },
  blaeoGenerators_ShortDesc: {
    eng: "A post snippet generator, made for members of the Backlog Assassins Extraordinaire group.",
    pol: "Generator fragmentów postów, stworzony dla członków grupy Backlog Assassins Extraordinaire."
  },
  blaeoGenerators_Desc1: {
    eng: "A post snippet generator, made for members of the Backlog Assassins Extraordinaire group.",
    pol: "Generator fragmentów postów, stworzony dla członków grupy Backlog Assassins Extraordinaire."
  },
  blaeoGenerators_Desc2: {
    eng: "Group members can use the generator to make various snippets in HTML/CSS containing their video game statistics. It's also simple enough to be used without any problem by members who have no HTML/CSS knowledge.",
    pol: "Członkowie grupy mogą skorzystać z generatora, by stworzyć fragmenty postów w HTML/CSS, które zawierają ich statystyki z gier komputerowych. Jest dość prosty w użyciu, by mogł go użyć każdy członek grupy, który nie posiada umiejętności HTML/CSS."
  },
  blaeoGenerators_Desc3: {
    eng: "The site uses the API on the group's website to fetch game libraries and statistics of group members. The game statistics can later be automatically filled in the generator for the user.",
    pol: "Strona korzysta z API na stronie grupy, by ściągać biblioteki gier członków grupy i ich statystyki. Później one mogą zostać automatycznie wprowadzone do generatora."
  },
  blaeoGenerators_Desc4: {
    eng: "Unfortunately, the generator is not much of use to any non-member, as the code is specifically designed to be put on the group website and the snippets will not display properly on any other site.",
    pol: "Niestety, generator jest bezużyteczny dla osób spoza grupy, ponieważ kod jest przystosowany tak, by działał tylko na stronie grupy. Fragmenty postu nie będą wyglądały poprawnie na każdej innej stronie."
  }
};
navigator.languages.some(function (lang) {
  switch (lang.slice(0, 2)) {
    case "pl":
      document.querySelector('[name="language"][checked]').checked = false;
      document.querySelector('#pol[name="language"]').checked = true;
      changeLanguage("pol");
      return true;

    case "en":
      return true;
  }
});