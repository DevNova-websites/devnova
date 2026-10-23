"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LEGAL } from "@/lib/legal";
import LegalPage from "@/components/LegalPage";

export default function PrivacyPolicyContent() {
  const { lang } = useLang();
  return lang === "es" ? <PrivacyEs /> : <PrivacyEn />;
}

function PrivacyEn() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data DevNova processes when you visit devnova.com.ar or contact us, why we process it, and the rights you have."
    >
      <h2>1. Who is responsible for your data</h2>
      <p>
        The data controller is {LEGAL.companyName} (CUIT {LEGAL.taxId}), trading as DevNova,{" "}
        {LEGAL.address}, Argentina. For any question about this policy or your personal data, write
        to {LEGAL.email}.
      </p>

      <h2>2. What data we process and why</h2>

      <h3>When you visit the website</h3>
      <p>
        Our hosting provider automatically processes technical data needed to deliver the website
        securely, such as your IP address, browser type, the pages requested and the time of the
        request. Legal basis: our legitimate interest in operating a secure and functioning website.
      </p>

      <h3>Website analytics (only with your consent)</h3>
      <p>
        If you accept cookies, we use Google Analytics 4 to understand how visitors use the website,
        for example which pages are visited, how visitors arrive at the site and which contact
        options they use. Google Analytics processes pseudonymous identifiers, device and browser
        information, approximate location derived from your IP address, and your interactions with
        the site. We do not use it for advertising. Legal basis: your consent, which you can withdraw
        at any time via &ldquo;Cookie settings&rdquo; in the footer. See our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> for details.
      </p>

      <h3>When you contact us</h3>
      <p>
        When you use our contact form or email us, we process the information you provide (your
        name, email address and message) to respond to your inquiry and follow up on any resulting
        conversation. Legal basis: our legitimate interest in responding to inquiries and, where
        relevant, taking steps at your request before entering into a contract. If you choose to
        write to us on WhatsApp or LinkedIn, those services process your data under their own
        privacy policies.
      </p>

      <h3>Client websites shown in our case studies</h3>
      <p>
        Some case study pages show a live preview of a client&apos;s website. That preview is loaded
        directly from the client&apos;s own domain, and any data it processes is governed by that
        website&apos;s own privacy and cookie policy.
      </p>

      <h2>3. Who we share data with</h2>
      <p>We do not sell personal data. We use the following service providers (data processors):</p>
      <ul>
        <li>
          <strong>Netlify, Inc.</strong> (USA): website hosting.
        </li>
        <li>
          <strong>Formspree, Inc.</strong> (USA): receives the messages sent through our contact form
          and forwards them to us by email.
        </li>
        <li>
          <strong>Google Ireland Ltd. / Google LLC</strong> (EU/USA): Google Analytics, only if you
          consent.
        </li>
        <li>
          <strong>Our email provider</strong>: to receive and answer your messages.
        </li>
      </ul>
      <p>
        Some of these providers are located in the USA. Where personal data of visitors from the
        EU/EEA is transferred there, the transfer relies on the EU-U.S. Data Privacy Framework where
        the provider is certified, or on the European Commission&apos;s Standard Contractual Clauses.
      </p>

      <h2>4. How long we keep data</h2>
      <ul>
        <li>Technical server logs: for a short period, as needed for security and operation.</li>
        <li>Google Analytics data: up to 14 months, after which it is deleted automatically.</li>
        <li>
          Inquiries and correspondence: as long as needed to handle the inquiry and any resulting
          relationship, and no longer than three years after our last contact, unless we are
          required to keep it longer by law.
        </li>
      </ul>

      <h2>5. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>have inaccurate data corrected;</li>
        <li>have your data deleted;</li>
        <li>restrict or object to our processing;</li>
        <li>receive your data in a portable format (visitors from the EU/EEA);</li>
        <li>withdraw your consent at any time, without affecting processing carried out before withdrawal.</li>
      </ul>
      <p>
        To exercise any of these rights, write to {LEGAL.email}. In Argentina, the supervisory
        authority for Law 25.326 on Personal Data Protection is the Agencia de Acceso a la
        Información Pública (
        <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">
          www.argentina.gob.ar/aaip
        </a>
        ). If you are in the EU/EEA, you can also lodge a complaint with the data protection
        authority of your country.
      </p>

      <h2>6. Automated decisions</h2>
      <p>We do not use automated decision-making or profiling that produces legal or similarly significant effects.</p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this policy when our website or services change. The date at the top of this
        page shows when it was last updated.
      </p>
    </LegalPage>
  );
}

function PrivacyEs() {
  return (
    <LegalPage
      title="Política de Privacidad"
      intro="Esta política explica qué datos personales trata DevNova cuando visitás devnova.com.ar o nos contactás, para qué los usamos y qué derechos tenés."
    >
      <h2>1. Responsable de tus datos</h2>
      <p>
        El responsable del tratamiento es {LEGAL.companyName} (CUIT {LEGAL.taxId}), que opera como
        DevNova, con domicilio en {LEGAL.address}, Argentina. Para cualquier consulta sobre esta
        política o tus datos personales, escribinos a {LEGAL.email}.
      </p>

      <h2>2. Qué datos tratamos y para qué</h2>

      <h3>Cuando visitás el sitio</h3>
      <p>
        Nuestro proveedor de hosting procesa automáticamente los datos técnicos necesarios para
        mostrar el sitio de forma segura, como tu dirección IP, el tipo de navegador, las páginas
        solicitadas y la hora de la solicitud. Base legal: nuestro interés legítimo en mantener un
        sitio seguro y en funcionamiento.
      </p>

      <h3>Estadísticas del sitio (solo con tu consentimiento)</h3>
      <p>
        Si aceptás las cookies, usamos Google Analytics 4 para entender cómo se usa el sitio, por
        ejemplo qué páginas se visitan, cómo llegan los visitantes y qué opciones de contacto
        eligen. Google Analytics procesa identificadores seudónimos, datos del dispositivo y del
        navegador, una ubicación aproximada derivada de la IP y tus interacciones con el sitio. No lo
        usamos para publicidad. Base legal: tu consentimiento, que podés retirar en cualquier
        momento desde &ldquo;Configurar cookies&rdquo; en el pie de página. Más detalles en nuestra{" "}
        <Link href="/cookie-policy">Política de Cookies</Link>.
      </p>

      <h3>Cuando nos contactás</h3>
      <p>
        Cuando usás el formulario de contacto o nos escribís por mail, tratamos los datos que nos
        das (nombre, email y mensaje) para responder tu consulta y continuar la conversación que
        surja. Base legal: nuestro interés legítimo en responder consultas y, si corresponde, tomar
        medidas a tu pedido antes de firmar un contrato. Si elegís escribirnos por WhatsApp o
        LinkedIn, esos servicios tratan tus datos según sus propias políticas de privacidad.
      </p>

      <h3>Sitios de clientes en los casos de estudio</h3>
      <p>
        Algunas páginas de casos de estudio muestran una vista previa en vivo del sitio de un
        cliente. Esa vista se carga directamente desde el dominio del cliente, y los datos que
        procese se rigen por la política de privacidad y de cookies de ese sitio.
      </p>

      <h2>3. Con quién compartimos datos</h2>
      <p>No vendemos datos personales. Trabajamos con estos proveedores (encargados del tratamiento):</p>
      <ul>
        <li>
          <strong>Netlify, Inc.</strong> (EE. UU.): hosting del sitio.
        </li>
        <li>
          <strong>Formspree, Inc.</strong> (EE. UU.): recibe los mensajes del formulario de contacto
          y nos los reenvía por mail.
        </li>
        <li>
          <strong>Google Ireland Ltd. / Google LLC</strong> (UE/EE. UU.): Google Analytics, solo si
          das tu consentimiento.
        </li>
        <li>
          <strong>Nuestro proveedor de correo</strong>: para recibir y responder tus mensajes.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores están en Estados Unidos. Cuando se transfieren allí datos de
        visitantes de la UE/EEE, la transferencia se basa en el Marco de Privacidad de Datos UE-EE.
        UU. si el proveedor está certificado, o en las Cláusulas Contractuales Tipo de la Comisión
        Europea.
      </p>

      <h2>4. Cuánto tiempo guardamos los datos</h2>
      <ul>
        <li>Registros técnicos del servidor: por un período corto, el necesario para seguridad y funcionamiento.</li>
        <li>Datos de Google Analytics: hasta 14 meses; después se borran automáticamente.</li>
        <li>
          Consultas y correspondencia: el tiempo necesario para atender la consulta y la relación que
          surja, y no más de tres años desde el último contacto, salvo que la ley nos obligue a
          conservarlos más tiempo.
        </li>
      </ul>

      <h2>5. Tus derechos</h2>
      <p>Tenés derecho a:</p>
      <ul>
        <li>acceder a los datos personales que tenemos sobre vos;</li>
        <li>rectificar los datos inexactos;</li>
        <li>pedir que borremos tus datos;</li>
        <li>limitar el tratamiento u oponerte a él;</li>
        <li>recibir tus datos en un formato portable (visitantes de la UE/EEE);</li>
        <li>retirar tu consentimiento en cualquier momento, sin afectar el tratamiento previo.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escribinos a {LEGAL.email}. En Argentina, la
        autoridad de control de la Ley 25.326 de Protección de Datos Personales es la Agencia de
        Acceso a la Información Pública (
        <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer">
          www.argentina.gob.ar/aaip
        </a>
        ). Si estás en la UE/EEE, también podés presentar un reclamo ante la autoridad de protección
        de datos de tu país.
      </p>

      <h2>6. Decisiones automatizadas</h2>
      <p>No tomamos decisiones automatizadas ni hacemos perfiles que produzcan efectos legales o similares.</p>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política si cambian el sitio o nuestros servicios. La fecha al
        principio de la página indica la última actualización.
      </p>
    </LegalPage>
  );
}
