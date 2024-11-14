import { UserButton, SignedIn } from '@clerk/nextjs'
import Link from "next/link";

const Navbar = () => {
  return (
		<header className="shadow">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium">
				<Link href="/">New Meeting</Link>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</header>
  )
}

export default Navbar