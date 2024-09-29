import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Home, LogOut, Package, PanelBottom, Settings2 } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export default function Sidebar() {
	return (
		<div className="flex w-full flex-col bg-muted">
			
			<aside className="fixed inset-y-0 left-0 z-10
			hidden w-14 border-r bg-background sm:flex flex-col">
				<nav className="flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Link 
						href="#"
						className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
						text-primary-foreground rounded-full"
						>
							<Package className="h-4 w-4"/>
							<span className="sr-only">Dashboard Avatar</span>
						</Link>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link 
								href="#"
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
								text-muted-foreground transition-colors hover:text-foreground"
								>
									<Home className="h-4 w-4"/>
									<span className="sr-only">Início</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Início
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>

				<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link 
								href="#"
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
								text-muted-foreground transition-colors hover:text-foreground"
								>
									<LogOut className="h-4 w-4 text-red-500"/>
									<span className="sr-only">Sair</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Sair
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>

			<div className="sm:hidden flex flex-col">
				<header className="sticky top-0 z-30 flex
				h-14 items-center px-4 border- b bg-background gap-4
				sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button size="icon" variant="outline" className="sm:hidden">
								<PanelBottom className="w-5 h-5" />
								<span className="sr-only">Abrir / fechar menu</span>
								{/* A classe sr-only esconde o item, mas mantém na árvore de elementos */}
							</Button>
						</SheetTrigger>

						<SheetContent side="left" className="sm:max-w-x">
							<nav className="grid gap-6 text-lg font-medium">
								<Link 
								href="#"
								className="flex h-10 w-10 bg-primary rounded-full
								text-lg items-center justify-center text-primary-foreground md:text-base
								gap-2"
								prefetch={false}
								>
									<Package className="h-5 w-5"/>
									<span className="sr-only">Logo</span>
								</Link>

								<Link 
								href="#"
								className="flex items-center gap-4 px-2.5 text-muted-foreground
								hover:text-foreground"
								prefetch={false}
								>
									<Home className="h-5 w-5 transition-all"/>
									Início
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<h2>Menu</h2>
				</header>
			</div>
		</div>
	);
}