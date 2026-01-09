import { AppConfig } from '../../lib/utils/AppConfig';

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      © Copyright {new Date().getFullYear()} {AppConfig.site_name}
      <a
        href="https://certif-scope.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;— All rights reserved
      </a>

      <style jsx>{`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}</style>
    </div>
  );
};

export { FooterCopyright };
