import ChartOverview from "@/components/chart";
import { Sales } from "@/components/sales/indesx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className="sm:ml-14 p-4">
			<section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<Card>
					<CardHeader>
						<div className="flex items-center justify-center">
							<CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
								Carteira
							</CardTitle>
							<Wallet className="ml-auto w-4 h-4"/>
						</div>

						<CardDescription>
							Total da Carteira
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-base sm:text-lg font-bold">R$ 100.000</p>
					</CardContent>
				</Card>
			</section>

			<section className="mt-4 flex flex-col md:flex-row gap-4">
				<ChartOverview/>
			</section>
		</main>
	);
}
