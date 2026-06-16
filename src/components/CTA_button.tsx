import Link from "next/link";
import React from "react";

function CTA_Buttons({ primaryText, primaryHref, secondaryText, secondaryHref }: {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        href={primaryHref}
        className="px-5 py-3 bg-[#2F3296] hover:bg-white hover:text-[#2F3296] border-2 border-transparent hover:border-[#2F3296] text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
      >
        {primaryText}
      </Link>
      <Link
        href={secondaryHref}
        className="px-5 py-3 bg-white text-[#2F3296] border-2 border-[#2F3296] hover:bg-[#2F3296] hover:text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
      >
        {secondaryText}
      </Link>
    </div>
  );
}

export default CTA_Buttons;