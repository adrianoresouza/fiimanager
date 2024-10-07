import { Avatar } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarSign, DollarSign } from "lucide-react";

export function Sales() {
	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-center">
					<CardTitle className="text-lg sm:text-xl text-gray-800">
						Últimos Clientes
						<CircleDollarSign className='ml-auto w-4 h-4' />
					</CardTitle>
				</div>
				<CardDescription>
					Novos clientes nas últimas 24 horas
				</CardDescription>
			</CardHeader>
			<CardContent>
				<article>
					<Avatar className="w-8 h-8">
						<AvatarImage src=""/>
					</Avatar>
				</article>
			</CardContent>
		</Card>
 );
}