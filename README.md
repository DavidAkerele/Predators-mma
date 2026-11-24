# Predators MMA & BJJ Academy

Next.js website for the Manchester academy. It presents Brazilian jiu-jitsu
(Gi and No-Gi), kickboxing, MMA, and the adult class timetable.

The timetable in app/schedule.tsx was transcribed from the academy handout
supplied on 24 November 2026. Check future timetable changes against the
academy before updating the site. The weekday private lessons and fighter
training block is shown as a note because the handout does not list individual
bookable sessions.

Run npm install and npm run dev locally. Run npm run build to check the
production build. The timetable filters use shadcn/ui Toggle Group and the
mobile menu uses its Button component, with Tailwind CSS v4 for the shared
component styles.

Training photographs and the official logo are sourced from the academy's
existing website and stored in public/images. Each visible training photograph
appears once. The browser icon is the existing site's icon. Booking links open
an email enquiry; there is no booking backend. The production site is at
https://predator-mma.vercel.app.

The Instagram profile at https://www.instagram.com/predators_mma_gym/ and its
Reels tab are linked from the site. The public profile bio confirms that
beginners are welcome and a free introductory class is offered. The gallery
photographs come from the academy website, not from Instagram posts. The two
embedded videos are from the academy's YouTube channel. Direct links to
individual Instagram Reels could not be verified from the public profile, so
they have not been attributed or embedded as Instagram content.
