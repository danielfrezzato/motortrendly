
    // Mobile Hamburger Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
      });

      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navLinks.classList.remove('open');
          document.body.classList.remove('no-scroll');
        });
      });
    }

    /* ==========================================================================
       1. Sticky Header & Active Navigation Highlighting
       ========================================================================== */
    window.addEventListener('scroll', function () {
      const header = document.getElementById('header');
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      highlightActiveNav();
    });

    const sections = ['features', 'diagnostics', 'events', 'forum', 'chat', 'garage'];
    function highlightActiveNav() {
      let scrollPos = window.scrollY + 200;
      sections.forEach(id => {
        const el = document.getElementById(id);
        const navEl = document.getElementById('nav-link-' + id);
        if (el && navEl) {
          if (scrollPos >= el.offsetTop && scrollPos < (el.offsetTop + el.offsetHeight)) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navEl.classList.add('active');
          }
        }
      });
    }

    /* ==========================================================================
       2. Dynamic i18n Translation Engine (IT / EN)
       ========================================================================== */
    let currentLanguage = 'it';

    // Extracted dictionary
    const i18nData = {
      it: {
        nav_features: "Funzionalità",
        nav_diagnostics: "Diagnostica AI",
        nav_events: "Mappe & Raduni",
        nav_forum: "Forum & Chat",
        nav_garage: "Il Garage",
        btn_download: "Scarica l'App",
        hero_badge: "🔥 Benvenuti nel Futuro dei Motori",
        hero_title: "L'era digitale dei motori è <span class=\"text-gradient\">MotorTrendly</span>",
        hero_desc: "Unisciti alla community definitiva per auto e moto. Gestisci il tuo garage virtuale, risolvi i problemi meccanici con l'aiuto dell'intelligenza artificiale e pianifica raduni mozzafiato su percorsi panoramici.",
        hero_cta_soon: "Prova Ora",
        stat_users: "Utenti Attivi",
        stat_vehicles: "Garage Reali",
        stat_resolved: "Guasti Risolti",
        features_badge: "Caratteristiche Premium",
        features_title: "Costruita da appassionati, per appassionati",
        features_desc: "Abbiamo raggruppato tutto ciò che serve a chi vive di benzina e asfalto in un'unica interfaccia scura, fluida e reattiva.",
        f1_title: "Garage Multiveicolo",
        f1_desc: "Registra auto e moto con schede tecniche avanzate. Traccia modifiche estetiche, aerodinamiche e motoristiche in profili dedicati e condivisibili.",
        f2_title: "Risoluzione Guasti con AI",
        f2_desc: "Scansiona i codici errore o descrivi i sintomi. La nostra intelligenza artificiale incrocia i dati con soluzioni reali convalidate da esperti.",
        f3_title: "Raduni & Itinerari",
        f3_desc: "Organizza raduni monomarca o aperti a tutti. Traccia percorsi stradali mozzafiato con tappe intermedie e condividili con la carovana in tempo reale.",

        diag_badge: "AI Diagnostic Engine",
        diag_title: "Risolvi i problemi del tuo veicolo in pochi clic",
        diag_desc: "MotorTrendly reinterpreta il concetto di forum tecnico in uno StackOverflow dei motori. Scansiona i guasti o descrivi i sintomi per essere guidato alla riparazione esatta.",
        diag_bullet_1: "Analisi automatica basata sulla somiglianza dei sintomi.",
        diag_bullet_2: "Wizard guidato in 5 passi per descrivere un'anomalia con foto e video.",
        diag_bullet_3: "Soluzioni convalidate con upvotes, downvotes e il badge \"Soluzione Accettata\".",

        wiz_step_1: "Mezzo",
        wiz_step_2: "Sintomo",
        wiz_step_3: "Modulo",
        wiz_step_4: "Analisi",
        wiz_step_5: "Diagnosi",
        wiz_title_1: "Seleziona il tipo di veicolo interessato:",
        wiz_opt_car: "Automobile",
        wiz_opt_bike: "Motocicletta",
        wiz_title_2: "Quali sintomi manifesta il veicolo?",
        wiz_title_3: "Seleziona l'area o il componente specifico:",
        wiz_scan_title: "Elaborazione Semantica AI...",
        wiz_scan_sub: "Analisi similarity score sul database globale MotorTrendly",
        wiz_accepted_sol_lbl: "Soluzione Accettata",
        btn_reset_wizard: "Riavvia",

        events_badge: "Giri domenicali & Raduni",
        events_title: "Pianifica raduni indimenticabili",
        events_desc: "Non guidare mai solo. MotorTrendly ti permette di scoprire, partecipare ed organizzare giri di gruppo e raduni turistici sul territorio.",
        events_bullet_1: "Esplora raduni monomarca o aperti vicino a te.",
        events_bullet_2: "Disegna mappe dettagliate con punti di partenza, tappe e arrivo.",
        events_bullet_3: "Comunica in tempo reale con i partecipanti tramite bacheca e chat dedicate.",
        lbl_organizer_feed: "Bacheca Organizzatore",
        lbl_community_chat: "Discussione Raduno",
        map_org_name: "Stefano R. (Organizzatore)",
        map_time_just_now: "Adesso",
        map_org_body_1: "Attenzione: asfalto umido sul Passo San Marco. Si consiglia prudenza e andatura moderata nella discesa.",
        map_org_body_2: "Posti limitati aggiornati a 20 max per coordinare al meglio il pranzo in vetta. Ammesse solo Porsche 911/Cayman/Boxster.",
        map_comm_body_1: "Ci aggreghiamo all'autogrill di Sondrio Est per fare benzina insieme alle 8:30? 🚀",
        map_comm_body_2: "Porsche GT4 pronta. Gomme nuove montate ieri, non vedo l'ora di affrontare i tornanti! 😍",

        forum_badge: "Discussioni & Community",
        forum_title: "Un Forum evoluto e fluido",
        forum_desc: "Un feed fluido diviso in aree tematiche per chiacchierare di novità, chiedere opinioni o pubblicare guide. Scopri un'interazione premium e moderna senza il caos dei soliti social.",
        forum_bullet_1: "Aree tematiche dedicate: Generale, Tutorial, Domande, Opinioni.",
        forum_bullet_2: "Commenti nidificati per conversazioni ordinate e menzioni degli utenti.",
        forum_bullet_3: "Supporto ad allegati multimediali e reazioni per premiare i contenuti migliori.",
        forum_pill_tut: "Tutorial",
        forum_pill_ques: "Domande",
        forum_pill_op: "Opinioni",
        forum_replies_count: "Risposte",
        forum_post_t1: "Come pulire correttamente i freni in ceramica",
        forum_body_t1: "Una guida passo-passo sui detergenti sicuri da utilizzare per evitare di danneggiare lo strato protettivo dei dischi carboceramici...",
        forum_post_t2: "Pirelli Diablo Rosso IV vs Metzeler M9 RR",
        forum_body_t2: "Cosa consigliate per un utilizzo prettamente stradale sportivo su una Ducati Panigale? Cerco grip sul bagnato e rapidità di riscaldamento.",

        chat_badge: "Messaggistica SignalR",
        chat_title: "Chat e messaggistica real-time",
        chat_desc: "Basata su tecnologia di comunicazione bidirezionale istantanea SignalR, la nostra chat ti connette istantaneamente ad altri appassionati e meccanici professionisti.",
        chat_bullet_1: "Comunicazione ultra-rapida senza necessità di ricaricare la pagina.",
        chat_bullet_2: "Supporto a notifiche istantanee di lettura, scrittura in corso e reazioni.",
        chat_bullet_3: "Condivisione rapida di ricambi, foto e coordinate per incontrarsi su strada.",
        chat_status_online: "Online",
        chat_incoming_msg_1: "Ciao! Ho visto il tuo garage MotorTrendly. La Porsche 911 GT3 RS monta lo scarico Akrapovič plug&play o hai dovuto rimappare per la garanzia?",
        chat_quick_replies_title: "Risposte Rapide (Simulatore)",
        chat_q1: "Plug&play assoluto, sound incredibile!",
        chat_q2: "Ho fatto una mappa soft per sicurezza.",
        chat_q3: "Ciao! Ti lascio il contatto del preparatore.",
        chat_reply_text_1: "Monta plug&play in modo perfetto, il sound in titanio è letteralmente ultraterreno e non perdi la garanzia ufficiale Approved! 😉",
        chat_reply_text_2: "Monta fisicamente plug&play, ma ti consiglio una rimappatura soft della centralina per ottimizzare le curve di coppia e non avere spie. 🛠️",
        chat_reply_text_3: "Monta tranquillamente. Ti lascio il contatto del preparatore autorizzato che ha seguito il mio garage, fa un lavoro eccezionale! 🚀",
        chat_incoming_response: "Spettacolo! Grazie mille per le info super precise. Aggiorno subito la mia wishlist nel garage! 🔥",

        garage_badge: "Il Garage Virtuale Integrato",
        garage_title: "Il tuo garage digitale definitivo",
        garage_desc: "Digitalizza e mostra il tuo parco veicoli reale. Gestisci dettagli prestazionali avanzati, cataloga le modifiche, tieni traccia dei costi di manutenzione privati ed esplora la galleria multimediale automatica.",
        garage_bullet_1: "Rilevamento dinamico di moto ed auto con parametri specifici tramite flag isBike.",
        garage_bullet_2: "Gestione modifiche estetiche e prestazionali con visibilità pubblica/privata.",
        garage_bullet_3: "Storico manutenzione privato per tracciare tagliandi, riparazioni e scadenze.",
        garage_bullet_4: "Media Gallery automatica con caroselli e uploader foto interattivo.",
        lbl_garage_demo: "Showroom Veicoli",
        lbl_car: "Auto",
        lbl_bike: "Moto",
        lbl_garage_specs: "Scheda Tecnica",
        lbl_garage_mods: "Modifiche",
        lbl_garage_maint: "Manutenzione",
        lbl_hp: "Potenza (CV)",
        lbl_torque: "Coppia (Nm)",
        lbl_acc: "0-100 km/h",
        lbl_garage_highlight: "Highlight del Garage:",
        lbl_garage_highlight_car: "Registrato e tracciato come veicolo primario per raduni ed eventi track-day.",
        lbl_garage_highlight_bike: "Utilizzato per giri domenicali alpini. Trattamento ceramico completo applicato sulla carena.",
        lbl_private_log: "REGISTRO PRIVATO UTENTE",
        lbl_th_date: "Data",
        lbl_th_desc: "Intervento",
        lbl_th_cost: "Costo",
        lbl_th_status: "Stato",
        lbl_garage_uploader: "Trascina o clicca qui per caricare foto",
        lbl_garage_uploader_limit: "PNG, JPG fino a 10MB (Simulato)",
        lbl_uploading: "Caricamento in corso...",
        lbl_upload_success: "Caricamento completato con successo!",

        cta_title: "Pronto a salire a bordo?",
        cta_desc: "Scarica MotorTrendly sul tuo dispositivo ed entra a far parte della più grande community di appassionati di auto e moto in Europa. L'app è completamente gratuita.",
        footer_about: "La piattaforma social e di utilità definitiva progettata specificamente per amanti di auto e moto. Connetti, diagnostica, viaggia.",
        footer_app: "Applicazione",
        footer_support: "Supporto",
        footer_legal: "Legal",
        footer_help: "Centro Assistenza",
        footer_guidelines: "Linee Guida Community",
        footer_bug: "Segnala bug",
        footer_contacts: "Contatti",
        footer_privacy: "Privacy Policy",
        footer_cookie: "Cookie Policy",
        footer_terms: "Termini di Servizio"
      },
    };

    function updatePageLanguage() {
      document.documentElement.lang = 'it';

      // Translate all data-i18n items
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18nData[currentLanguage][key]) {
          element.innerHTML = i18nData[currentLanguage][key];
        }
      });

      // Update placeholders or dynamic text
      if (activeWizardVehicle) {
        loadWizardSymptoms();
        loadWizardComponents();
      }
    }

    /* ==========================================================================
       3. Widget 1: Dynamic AI Diagnostics & 5-Step Wizard
       ========================================================================== */
    let activeWizardVehicle = null;
    let selectedSymptom = '';
    let selectedComponent = '';
    let wizardStep = 1;

    const wizardSymptoms = {
      auto: {
        it: ["Mancata accensione a freddo", "Fumo grigio dallo scarico", "Fischio freni ad alta velocità", "Spia motore accesa fisso"],
        en: ["Cold engine misfiring", "Grey exhaust smoke", "High-speed brake squeal", "Solid check engine light"]
      },
      moto: {
        it: ["Perdita olio stelo forcella", "Difficoltà avviamento a caldo", "Strappi della catena ai bassi", "Taglio trazione improvviso"],
        en: ["Fork seal oil leak", "Hot start difficulties", "Low-rpm chain jerk", "Sudden traction cut-off"]
      }
    };

    const wizardComponents = {
      auto: {
        it: [
          { name: "Bobine / Candele", icon: "bolt" },
          { name: "Turbocompressore", icon: "speed" },
          { name: "Freni Ceramici", icon: "album" },
          { name: "Sensore O2 / Lambda", icon: "sensors" }
        ],
        en: [
          { name: "Ignition Coils / Plugs", icon: "bolt" },
          { name: "Turbocharger", icon: "speed" },
          { name: "Ceramic Brakes", icon: "album" },
          { name: "O2 Sensor / Lambda", icon: "sensors" }
        ]
      },
      moto: {
        it: [
          { name: "Sospensioni Ohlins", icon: "construction" },
          { name: "Iniezione Elettronica", icon: "settings_input_component" },
          { name: "Trasmissione / Catena", icon: "settings" },
          { name: "Piattaforma IMU AI", icon: "psychology" }
        ],
        en: [
          { name: "Ohlins Suspension", icon: "construction" },
          { name: "Electronic Injection", icon: "settings_input_component" },
          { name: "Transmission / Chain", icon: "settings" },
          { name: "AI IMU Platform", icon: "psychology" }
        ]
      }
    };

    const wizardDiagnosticsData = {
      auto: {
        "Bobine / Candele": {
          it: {
            title: "Mancata accensione cilindro 3",
            score: "98% Somiglianza",
            desc: "Sintomi rilevati: Vuoti di erogazione e minimo ruvido a freddo. Centralina registra errore OBD: P0303.",
            solution: "Sostituzione bobina di accensione del cilindro 3 e kit candele sportive NGK Platinum."
          },
          en: {
            title: "Cylinder 3 Misfiring",
            score: "98% Similarity",
            desc: "Detected symptoms: Cold hesitation and rough idle. OBD registers fault code: P0303.",
            solution: "Replace ignition coil for cylinder 3 and fit NGK Platinum sport spark plugs."
          }
        },
        "Turbocompressore": {
          it: {
            title: "Attuatore Wastegate bloccato",
            score: "85% Somiglianza",
            desc: "Sintomi rilevati: Pressione turbo insufficiente ad alti regimi. Errore OBD: P0299.",
            solution: "Lubrificazione snodo attuatore o sostituzione solenoide controllo wastegate N75."
          },
          en: {
            title: "Stuck Wastegate Actuator",
            score: "85% Similarity",
            desc: "Detected symptoms: Underboost pressure at high rpm. OBD code: P0299.",
            solution: "Lubricate actuator pivot joints or replace N75 wastegate control solenoid."
          }
        }
      },
      moto: {
        "Sospensioni Ohlins": {
          it: {
            title: "Paraolio stelo usurato",
            score: "92% Somiglianza",
            desc: "Sintomi rilevati: Tracce di olio sullo stelo sinistro e perdita di freno idraulico in compressione.",
            solution: "Sostituzione paraolio ad alto scorrimento SKF e ripristino olio forcella Ohlins originale."
          },
          en: {
            title: "Worn Fork Seal",
            score: "92% Similarity",
            desc: "Detected symptoms: Oil rings on left fork inner tube, lack of compression damping.",
            solution: "Replace oil seal with high-slide SKF seal and refill with original Ohlins fork fluid."
          }
        }
      }
    };

    function selectWizardVehicle(type) {
      activeWizardVehicle = type;
      loadWizardSymptoms();
      loadWizardComponents();
      goToWizardStep(2);
    }

    function loadWizardSymptoms() {
      const container = document.getElementById('symptom-list-container');
      container.innerHTML = '';
      const list = wizardSymptoms[activeWizardVehicle][currentLanguage];
      list.forEach(symptom => {
        const item = document.createElement('div');
        item.className = 'wizard-symptom-item';
        item.innerHTML = `
          <span>${symptom}</span>
          <span class="material-symbols-outlined icon-arrow">arrow_forward</span>
        `;
        item.onclick = () => selectWizardSymptom(symptom);
        container.appendChild(item);
      });
    }

    function selectWizardSymptom(symptom) {
      selectedSymptom = symptom;
      goToWizardStep(3);
    }

    function loadWizardComponents() {
      const container = document.getElementById('component-list-container');
      container.innerHTML = '';
      const list = wizardComponents[activeWizardVehicle][currentLanguage];
      list.forEach(component => {
        const item = document.createElement('div');
        item.className = 'wizard-option-btn';
        item.innerHTML = `
          <span class="material-symbols-outlined">${component.icon}</span>
          <span>${component.name}</span>
        `;
        item.onclick = () => selectWizardComponent(component.name);
        container.appendChild(item);
      });
    }

    function selectWizardComponent(component) {
      selectedComponent = component;
      goToWizardStep(4);

      // Simulate AI Scanning progress bar
      const fill = document.getElementById('scan-progress-fill');
      fill.style.width = '0%';
      let width = 0;
      const interval = setInterval(() => {
        width += 5;
        fill.style.width = width + '%';
        if (width >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            showWizardDiagnosis();
          }, 300);
        }
      }, 100);
    }

    function showWizardDiagnosis() {
      // Fetch diagnosis details or fallback
      let diag = null;

      // Map components properly due to translation differences
      let searchKey = selectedComponent;
      if (currentLanguage === 'en') {
        if (selectedComponent.includes("Ignition")) searchKey = "Bobine / Candele";
        if (selectedComponent.includes("Turbocharger")) searchKey = "Turbocompressore";
        if (selectedComponent.includes("Ohlins")) searchKey = "Sospensioni Ohlins";
      }

      if (wizardDiagnosticsData[activeWizardVehicle] && wizardDiagnosticsData[activeWizardVehicle][searchKey]) {
        diag = wizardDiagnosticsData[activeWizardVehicle][searchKey][currentLanguage];
      } else {
        // Fallback generic diagnosis
        diag = {
          title: (currentLanguage === 'it') ? "Anomalia Generica Rilevata" : "Generic Anomaly Detected",
          score: "78% Somiglianza",
          desc: (currentLanguage === 'it') ? "Sintomo analizzato con logica probabilistica basata su vettorializzazione sintomatica." : "Symptom analyzed with probabilistic logic based on symptomatic vectorization.",
          solution: (currentLanguage === 'it') ? "Verifica cablaggi elettrici e pulizia sensori di flusso." : "Verify electrical wiring and clean flow sensors."
        };
      }

      document.getElementById('wiz-res-title').innerText = diag.title;
      document.getElementById('wiz-res-score').innerText = diag.score;
      document.getElementById('wiz-res-desc').innerText = diag.desc;
      document.getElementById('wiz-res-sol').innerText = diag.solution;

      // Reset upvote button
      const upBtn = document.getElementById('wiz-upvote-btn');
      upBtn.classList.remove('upvoted');
      document.getElementById('wiz-upvote-count').innerText = "142";

      goToWizardStep(5);
    }

    function upvoteWizardSolution() {
      const upBtn = document.getElementById('wiz-upvote-btn');
      const countEl = document.getElementById('wiz-upvote-count');
      if (upBtn.classList.contains('upvoted')) {
        upBtn.classList.remove('upvoted');
        countEl.innerText = "142";
      } else {
        upBtn.classList.add('upvoted');
        countEl.innerText = "143";
      }
    }

    function goToWizardStep(step) {
      wizardStep = step;
      // Update step indicator classes
      for (let i = 1; i <= 5; i++) {
        const ind = document.getElementById('wizard-ind-' + i);
        const pane = document.getElementById('wizard-pane-' + i);

        ind.classList.remove('active', 'completed');
        pane.classList.remove('active');

        if (i < step) {
          ind.classList.add('completed');
        } else if (i === step) {
          ind.classList.add('active');
          pane.classList.add('active');
        }
      }
    }

    function resetWizard() {
      activeWizardVehicle = null;
      selectedSymptom = '';
      selectedComponent = '';
      goToWizardStep(1);
    }

    /* ==========================================================================
       4. Widget 2: Event Itinerary Map & Tabs
       ========================================================================== */
    function switchMapTab(tab) {
      document.getElementById('map-tab-organizer').classList.remove('active');
      document.getElementById('map-tab-community').classList.remove('active');
      document.getElementById('map-feed-organizer').style.display = 'none';
      document.getElementById('map-feed-community').style.display = 'none';

      document.getElementById('map-tab-' + tab).classList.add('active');
      document.getElementById('map-feed-' + tab).style.display = 'flex';
    }

    /* ==========================================================================
       5. Widget 3: Forum Grid Filtering & Nested Replies
       ========================================================================== */
    function filterForum(category) {
      document.querySelectorAll('.forum-filter-pill').forEach(btn => btn.classList.remove('active'));
      document.getElementById('forum-pill-' + (category === 'all' ? 'all' : category)).classList.add('active');

      document.querySelectorAll('.forum-post-card').forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function toggleForumReplies(id) {
      const panel = document.getElementById('forum-replies-' + id);
      if (panel.style.display === 'none') {
        panel.style.display = 'flex';
      } else {
        panel.style.display = 'none';
      }
    }

    const likedPosts = {};
    function likeForumPost(id) {
      const btn = document.getElementById('forum-like-' + id);
      const countEl = document.getElementById('forum-like-count-' + id);
      let count = parseInt(countEl.innerText);

      if (likedPosts[id]) {
        btn.classList.remove('active');
        countEl.innerText = count - 1;
        likedPosts[id] = false;
      } else {
        btn.classList.add('active');
        countEl.innerText = count + 1;
        likedPosts[id] = true;
      }
    }

    /* ==========================================================================
       6. Widget 4: SignalR Live Chat Simulator
       ========================================================================== */
    let replySequenceActive = false;

    function sendSimulatedChatMessage(replyType) {
      if (replySequenceActive) return;
      replySequenceActive = true;

      const chatContainer = document.getElementById('chat-messages-container');

      // 1. Get user selected reply
      let quickText = '';
      let expertText = '';
      if (replyType === 'reply_1') {
        quickText = i18nData[currentLanguage].chat_q1;
        expertText = i18nData[currentLanguage].chat_reply_text_1;
      } else if (replyType === 'reply_2') {
        quickText = i18nData[currentLanguage].chat_q2;
        expertText = i18nData[currentLanguage].chat_reply_text_2;
      } else {
        quickText = i18nData[currentLanguage].chat_q3;
        expertText = i18nData[currentLanguage].chat_reply_text_3;
      }

      // Disable quick replies buttons during simulation
      document.querySelectorAll('.chat-quick-btn').forEach(btn => btn.style.opacity = '0.4');

      // Append Outgoing Message
      const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const userBubble = document.createElement('div');
      userBubble.className = 'chat-bubble outgoing';
      userBubble.innerHTML = `
        <span>${quickText}</span>
        <div class="chat-meta">${timeNow} <span class="material-symbols-outlined" style="font-size: 0.75rem;">done_all</span></div>
      `;
      chatContainer.appendChild(userBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // 2. Simulate Expert Typing (SignalR active indicator) after 1s
      setTimeout(() => {
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat-typing-indicator';
        typingIndicator.id = 'chat-typing-bubble';
        typingIndicator.innerHTML = `
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        `;
        chatContainer.appendChild(typingIndicator);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // 3. Append Expert Response after 2s typing
        setTimeout(() => {
          document.getElementById('chat-typing-bubble').remove();

          const expertBubble = document.createElement('div');
          expertBubble.className = 'chat-bubble incoming';
          expertBubble.innerHTML = `
            <span>${expertText}</span>
            <div class="chat-meta">${timeNow}</div>
            <div class="chat-bubble-reaction">❤️</div>
          `;
          chatContainer.appendChild(expertBubble);
          chatContainer.scrollTop = chatContainer.scrollHeight;

          // 4. Simulate a follow up reaction / notification from expert after 1.5s
          setTimeout(() => {
            const followUpBubble = document.createElement('div');
            followUpBubble.className = 'chat-bubble incoming';
            followUpBubble.innerHTML = `
              <span>${i18nData[currentLanguage].chat_incoming_response}</span>
              <div class="chat-meta">${timeNow}</div>
            `;
            chatContainer.appendChild(followUpBubble);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Re-enable and reset quick replies list
            document.querySelectorAll('.chat-quick-btn').forEach(btn => btn.style.opacity = '1');
            replySequenceActive = false;
          }, 1500);

        }, 2000);

      }, 1000);
    }

    function updateChatQuickReplies() {
      // Helper to update the text of quick reply buttons
      const container = document.getElementById('chat-quick-replies-container');
      container.innerHTML = `
        <button class="chat-quick-btn" onclick="sendSimulatedChatMessage('reply_1')">${i18nData[currentLanguage].chat_q1}</button>
        <button class="chat-quick-btn" onclick="sendSimulatedChatMessage('reply_2')">${i18nData[currentLanguage].chat_q2}</button>
        <button class="chat-quick-btn" onclick="sendSimulatedChatMessage('reply_3')">${i18nData[currentLanguage].chat_q3}</button>
      `;
    }

    /* ==========================================================================
       7. Widget 5: Garage Virtuale & Showroom (LAST SECTION)
       ========================================================================== */
    let selectedGarageType = 'auto';
    let garageTab = 'specs';
    let currentSlideIndex = 0;

    const garageVehiclesData = {
      auto: {
        isBike: false,
        name: "Porsche 911 GT3 RS",
        desc: {
          it: "Generazione 992 — Weissach Package (2024)",
          en: "992 Generation — Weissach Package (2024)"
        },
        power: "525",
        torque: "465",
        acc: "3.2s",
        highlight: {
          it: "Registrato e tracciato come veicolo primario per raduni ed eventi track-day.",
          en: "Registered and flagged as primary track tool for club rallies and track-days."
        },
        mods: [
          { name: { it: "Impianto di scarico Akrapovič in titanio", en: "Akrapovič titanium full exhaust system" }, public: true },
          { name: { it: "Cerchi forgiati Manthey Racing magnesio", en: "Manthey Racing forged magnesium wheels" }, public: true },
          { name: { it: "Mappatura centralina stage 1 soft", en: "Stage 1 custom soft ECU remap" }, public: false }
        ],
        maintenance: [
          { date: "15/04/2026", item: { it: "Tagliando completo (Motul 300V, filtri)", en: "Full service (Motul 300V, filter replacement)" }, cost: "€580", status: "Done" },
          { date: "02/05/2026", item: { it: "Pastiglie freno sportive Brembo Racing", en: "Brembo Racing sport brake pads" }, cost: "€320", status: "Done" }
        ],
        slides: [
          { src: "https://images.unsplash.com/photo-1706505051322-a7d5ea8537b0?q=80&w=600&auto=format&fit=crop", caption: { it: "Anteriore aggressivo con splitter Manthey", en: "Aggressive front fascia with Manthey splitter" } },
          { src: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop", caption: { it: "Profilo aerodinamico 992 GT3 RS", en: "Aerodynamic silhouette of the 992 GT3 RS" } }
        ]
      },
      moto: {
        isBike: true,
        name: "Ducati Panigale V4 R",
        desc: {
          it: "WSBK Homologation Road Version (2025)",
          en: "WSBK Homologation Road Version (2025)"
        },
        power: "218",
        torque: "112",
        acc: "2.7s",
        highlight: {
          it: "Utilizzato per giri domenicali alpini. Trattamento ceramico completo applicato sulla carena.",
          en: "Used for alpine Sunday cruises. Full ceramic coat applied to the carbon panels."
        },
        mods: [
          { name: { it: "Scarico racing completo Akrapovič", en: "Akrapovič full carbon racing exhaust" }, public: true },
          { name: { it: "Frizione a secco STM EVO SBK", en: "STM EVO dry SBK slipper clutch" }, public: true },
          { name: { it: "Carene in fibra di carbonio lucido", en: "Glossy autoclave carbon fiber bodywork" }, public: false }
        ],
        maintenance: [
          { date: "10/04/2026", item: { it: "Sostituzione olio forcella Ohlins", en: "Ohlins fork fluid flush" }, cost: "€180", status: "Done" },
          { date: "28/04/2026", item: { it: "Controllo gioco valvole (Desmo service)", en: "Desmo valve clearance clearance check" }, cost: "€650", status: "Done" }
        ],
        slides: [
          { src: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop", caption: { it: "Ducati Panigale V4 R in carbonio", en: "Ducati Panigale V4 R in carbon trim" } },
          { src: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=600&auto=format&fit=crop", caption: { it: "Dettaglio frizione STM a secco", en: "STM dry clutch showcase" } }
        ]
      }
    };

    function selectGarageVehicle(type) {
      selectedGarageType = type;
      currentSlideIndex = 0;

      // Update toggle buttons active class
      document.getElementById('garage-btn-car').classList.remove('active');
      document.getElementById('garage-btn-bike').classList.remove('active');
      document.getElementById('garage-btn-' + (type === 'auto' ? 'car' : 'bike')).classList.add('active');

      // Trigger card crossfade
      const card = document.querySelector('.garage-card-inner');
      card.style.opacity = '0.3';

      setTimeout(() => {
        updateGarageView();
        card.style.opacity = '1';
      }, 250);
    }

    function updateGarageView() {
      const data = garageVehiclesData[selectedGarageType];

      // Update isBike Flag indicator
      document.getElementById('garage-isbike-indicator').innerText = `isBike = ${data.isBike}`;

      // Tab specs content
      document.getElementById('garage-vehicle-name').innerText = data.name;
      document.getElementById('garage-vehicle-desc').innerText = data.desc[currentLanguage];
      document.getElementById('gauge-power-val').innerText = data.power;
      document.getElementById('gauge-torque-val').innerText = data.torque;
      document.getElementById('gauge-acc-val').innerText = data.acc;
      document.getElementById('garage-vehicle-highlight-text').innerText = data.highlight[currentLanguage];

      // Tab mods content
      const modsContainer = document.getElementById('garage-mods-container');
      modsContainer.innerHTML = '';
      data.mods.forEach((mod, idx) => {
        const item = document.createElement('div');
        item.className = 'garage-mod-item';
        const visClass = mod.public ? 'public' : 'private';
        const visLabel = mod.public
          ? (currentLanguage === 'it' ? 'Pubblica' : 'Public')
          : (currentLanguage === 'it' ? 'Privata' : 'Private');

        item.innerHTML = `
          <span class="garage-mod-name">${mod.name[currentLanguage]}</span>
          <span class="garage-mod-visibility ${visClass}" onclick="toggleModVisibility(${idx})">${visLabel}</span>
        `;
        modsContainer.appendChild(item);
      });

      // Tab maintenance content
      const maintTbody = document.getElementById('garage-maint-tbody');
      maintTbody.innerHTML = '';
      data.maintenance.forEach(log => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${log.date}</td>
          <td>${log.item[currentLanguage]}</td>
          <td class="garage-log-cost">${log.cost}</td>
          <td><span class="garage-log-status">${log.status}</span></td>
        `;
        maintTbody.appendChild(tr);
      });

      // Load slides
      renderGarageCarousel();
    }

    function toggleModVisibility(idx) {
      const mod = garageVehiclesData[selectedGarageType].mods[idx];
      mod.public = !mod.public;
      updateGarageView();
    }

    function switchGarageTab(tab) {
      garageTab = tab;
      document.querySelectorAll('.garage-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.getElementById('garage-tab-btn-' + tab).classList.add('active');

      document.querySelectorAll('.garage-tab-pane').forEach(pane => pane.classList.remove('active'));
      document.getElementById('garage-pane-' + tab).classList.add('active');
    }

    // Carousel slideshow logic
    function renderGarageCarousel() {
      const data = garageVehiclesData[selectedGarageType];
      const carousel = document.getElementById('garage-carousel-element');
      carousel.innerHTML = '';

      data.slides.forEach((slide, idx) => {
        const activeClass = (idx === currentSlideIndex) ? 'active' : '';
        const slideDiv = document.createElement('div');
        slideDiv.className = `garage-slide ${activeClass}`;
        slideDiv.innerHTML = `
          <img src="${slide.src}" alt="Garage Photo" class="garage-slide-img">
          <div class="garage-slide-caption">${slide.caption[currentLanguage]}</div>
        `;
        carousel.appendChild(slideDiv);
      });

      // Indicators dots
      const indicators = document.getElementById('carousel-indicators-dots');
      indicators.innerHTML = '';
      data.slides.forEach((_, idx) => {
        const activeClass = (idx === currentSlideIndex) ? 'active' : '';
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${activeClass}`;
        dot.onclick = () => {
          currentSlideIndex = idx;
          renderGarageCarousel();
        };
        indicators.appendChild(dot);
      });
    }

    function nextGarageSlide() {
      const data = garageVehiclesData[selectedGarageType];
      currentSlideIndex = (currentSlideIndex + 1) % data.slides.length;
      renderGarageCarousel();
    }

    function prevGarageSlide() {
      const data = garageVehiclesData[selectedGarageType];
      currentSlideIndex = (currentSlideIndex - 1 + data.slides.length) % data.slides.length;
      renderGarageCarousel();
    }

    // Media uploader simulation
    function triggerSimulatedUpload() {
      const progressContainer = document.getElementById('upload-progress-container-element');
      const progressFill = document.getElementById('upload-progress-fill-element');
      const percentText = document.getElementById('upload-percent-text');

      progressContainer.style.display = 'flex';
      progressFill.style.width = '0%';
      percentText.innerText = '0%';

      let percent = 0;
      const interval = setInterval(() => {
        percent += 10;
        progressFill.style.width = percent + '%';
        percentText.innerText = percent + '%';

        if (percent >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Add custom uploaded slide to the vehicle slide data!
            const data = garageVehiclesData[selectedGarageType];
            const newIndex = data.slides.length + 1;

            // Standard generic car/bike dashboard preview as simulated uploaded item
            const uploadedImgSrc = (selectedGarageType === 'auto')
              ? "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
              : "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop";

            const captionText = (currentLanguage === 'it')
              ? `Caricato con successo - Vista ${newIndex}`
              : `Uploaded successfully - View ${newIndex}`;

            data.slides.push({
              src: uploadedImgSrc,
              caption: { it: captionText, en: captionText }
            });

            // Swap to newly uploaded slide
            currentSlideIndex = data.slides.length - 1;
            renderGarageCarousel();

            // Reset progress box with alert success message
            percentText.innerText = 'OK!';
            setTimeout(() => {
              progressContainer.style.display = 'none';
            }, 1000);

          }, 300);
        }
      }, 150);
    }

    /* ==========================================================================
       8. Initial Bootstrap Execution
       ========================================================================== */
    updatePageLanguage();

    // Toggle Diagnostics screen simulation
    let currentDiagScreen = 1;
    function toggleDiagnosticsScreen() {
      const view1 = document.getElementById('diag-view-1');
      const view2 = document.getElementById('diag-view-2');
      const hintText = document.getElementById('hotspot-hint-text');

      if (!view1 || !view2) return;

      if (currentDiagScreen === 1) {
        view1.classList.remove('active');
        view2.classList.add('active');
        currentDiagScreen = 2;
        if (hintText) hintText.innerText = "Clicca per resettare la simulazione";
      } else {
        view2.classList.remove('active');
        view1.classList.add('active');
        currentDiagScreen = 1;
        if (hintText) hintText.innerText = "Clicca sullo schermo per simulare la ricerca AI";
      }
    }

    // Toggle Events screen simulation
    let currentEventScreen = 1;
    function showEventScreen(screenIndex) {
      const v1 = document.getElementById('event-view-1');
      const v2 = document.getElementById('event-view-2');
      const v3 = document.getElementById('event-view-3');
      const hint = document.getElementById('event-hint-text');

      if (!v1 || !v2 || !v3) return;

      v1.classList.remove('active');
      v2.classList.remove('active');
      v3.classList.remove('active');

      if (screenIndex === 1) {
        v1.classList.add('active');
        if (hint) hint.innerText = "Clicca sui raduni sulla mappa per esplorare i dettagli";
      } else if (screenIndex === 2) {
        v2.classList.add('active');
        if (hint) hint.innerText = "Clicca sul pulsante freccia in alto per tornare alla mappa";
      } else if (screenIndex === 3) {
        v3.classList.add('active');
        if (hint) hint.innerText = "Clicca sul pulsante freccia in alto per tornare alla mappa";
      }
      currentEventScreen = screenIndex;
    }

    // Toggle Forum screen simulation
    let currentForumScreen = 1;
    function toggleForumScreen() {
      const view1 = document.getElementById('forum-view-1');
      const view2 = document.getElementById('forum-view-2');
      const hintText = document.getElementById('forum-hint-text');

      if (!view1 || !view2) return;

      if (currentForumScreen === 1) {
        view1.classList.remove('active');
        view2.classList.add('active');
        currentForumScreen = 2;
        if (hintText) hintText.innerText = "Clicca sullo schermo per tornare alla lista";
      } else {
        view2.classList.remove('active');
        view1.classList.add('active');
        currentForumScreen = 1;
        if (hintText) hintText.innerText = "Clicca sullo schermo per aprire la discussione STAGE 1";
      }
    }

    // Cookie Banner consent management
    function initCookieBanner() {
      const banner = document.getElementById('cookie-banner');
      if (!banner) return;
      const consent = localStorage.getItem('mt_cookie_consent');
      if (!consent) {
        // Organic premium delay
        setTimeout(() => {
          banner.classList.add('show');
        }, 2000);
      }
    }

    function manageCookies(choice) {
      const banner = document.getElementById('cookie-banner');
      localStorage.setItem('mt_cookie_consent', choice);
      if (banner) {
        banner.classList.remove('show');
      }
    }

    document.addEventListener('DOMContentLoaded', initCookieBanner);

    // Premium Preloader Fadeout on Page Fully Loaded
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        // Organic premium delay (reduced)
        setTimeout(() => {
          preloader.classList.add('fade-out');
        }, 300);
      }
    });
  