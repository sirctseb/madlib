import { MadLib }from '../components/MabLib';

const dearTheodosia = 
`Dear |person in room|, what to say to you?
You have my |noun|, you have your mother's |noun|
When you came into the world, you |past tense verb|
And it broke my |body part|
I'm dedicating every day to you
|adjective| life was never quite my style
When you |verb|, you knock me out, I fall apart
And I thought I was so |adjective|

You will come of age with our |adjective| nation
We'll bleed and fight for you
We'll make it right for you
If we lay a strong enough |noun|
We'll pass it on to you, we'll give the |noun| to you
And you'll blow us all away
Someday, someday

Oh |person in room|, when you |verb| I am undone
My son, look at my |noun|
|noun| is not the word I'm looking for
There is so much more inside me now
Oh Philip, you outshine the |adjective| sun, my son
When you |verb|, I fall apart
And I thought I was so smart

My father wasn't a |noun|
My father wasn't a |noun|
I swear that I'll be around for you
I'll do whatever it takes
I'll make |number| mistakes
I'll make the world |adjective| and |adjective| for you

Will come of age with our young |noun|
We'll |verb| and |verb| for you
We'll make it |adjective| for you
If we lay a strong enough foundation
We'll pass it on to you, we'll give the world to you
And you'll blow us all away
Someday, |day of the week|`;

const tallulah =
`
|person in room| just knew she could be a great |job|
if only she |past tense verb| a tutu.  "And maybe
a |noun| or two," her mother said with a wink.

The next day, Tallulah went to her very first ballet
class.  The kids wore |article of clothing| and pink
tights.  All except one. He had on black pants. A boy
in ballet?  Well, HE won't get a tutu.
Tallulah |past tense verb|.  "Are you with us,
Tallulah?" asked her teacher.

Talluah decided she'd better pay attention.
She |past tense verb| out her feet and curved her
hands near her hips in first position.
She bent her |body parts| in a plie.

At the end of class, the teacher told them what a
great job they'd done. Tallulah waited for her tutu.

But instead she got a |noun|.
"Good job," her teacher said.

Tallulah decided that her tutu must be coming
from |place|. They would fly it in next week.

Tallulah practiced every day.  "Look at my |adjective|
arms," she said on the way to class. "Look
at my perfect |noun|!"

She grinned a big grin as she stood at
the |wooden thing|. "What color tutu do you want?" she
asked the girl in front of her. "I want lavender!"
She pointed to some flowers |verb ending in -ing| outside
the window. "Tallulah, look in the mirror. Can you make
your back straighter?" her teacher said.
Tallulah could. She jumped her heels apart
to |number| position. She pointed her toe in a tendu.
She circled her foot on the floor in a rond de jambe.
I am a fabulous ballerina. Tallulah told herself.
I'm going to get my tutu right after |noun|.
`

export default function Home() {
  return <MadLib title='Dear Theodosia' text={dearTheodosia} />
}
// export default function Home() {
//   return <MadLib title='Tallulah' text={tallulah} />
// }
