export default function Kelp({ className = "" }) {
  return (
    <svg
      width="60"
      height="300"
      viewBox="0 0 60 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute origin-bottom bottom-0 ${className}`}
    >
      <path
        d="M40 300 Q20 250 40 200 Q60 150 40 100 Q20 50 40 8"
        stroke="#3c9a3c"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 300 Q20 250 40 200 Q60 150 40 100 Q20 50 40 12"
        stroke="#2e7a2e"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="35"
        cy="240"
        rx="5"
        ry="25"
        fill="#4cb84c"
        transform="rotate(20, 40, 270)"
      />

      <path
        d="M35 264 A 150 150 0 0 0 53 220"
        stroke="#3c9a3c"
        strokeWidth="3"
        fill="none"
      />

      <ellipse
        cx="24"
        cy="150"
        rx="6"
        ry="25"
        fill="#4cb84c"
        transform="rotate(-40, 40, 150)"
      />
      <path
        d="M45 184 A 150 150 0 0 0 13 143"
        stroke="#3c9a3c"
        strokeWidth="2"
        fill="none"
      />

      <ellipse
        cx="45"
        cy="50"
        rx="5"
        ry="25"
        fill="#4cb84c"
        transform="rotate(15, 30, 50)"
      />

      <path
        d="M40 83 A 100 100 0 0 1 50 34"
        stroke="#3c9a3c"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
