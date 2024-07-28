import { FC } from 'react'
import Container from './UI/container'
import AccordionList from './UI/accordion/accordion-list'
import Accordion from './UI/accordion'
import AccordionTitle from './UI/accordion/accordion-title'
import AccordionContent from './UI/accordion/accordion-content'


const App: FC = () => {
	return (
		<Container>
			<AccordionList>
				<Accordion>
					<AccordionTitle>AccordionTitle 1</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 2</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 3</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 4</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 5</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
			</AccordionList>
			<AccordionList>
				<Accordion>
					<AccordionTitle>AccordionTitle 1</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 2</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 3</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 4</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
				<Accordion>
					<AccordionTitle>AccordionTitle 5</AccordionTitle>
					<AccordionContent>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, quisquam. Sit, numquam? Repellendus unde atque consequatur cumque ipsam voluptas, molestias tenetur error quam assumenda, rerum deleniti iste esse commodi illum!
					</AccordionContent>
				</Accordion>
			</AccordionList>
		</Container>
	)
}

export default App
