import { useState } from 'react'

const Accordion = () => {
  const accordionItems = [
    {
      question: 'Can I Find the right information faster?',
      answer:
        'Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.',
    },
    {
      question: 'How to share feature demos and ideas?',
      answer: 'Answer for the second question.',
    },
    {
      question: 'How to get insights from users?',
      answer: 'Answer for the third question.',
    },
    {
      question: 'Can I develop my website without code?',
      answer: 'Answer for the fourth question.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="max-w-md mt-8 flex flex-col justify-center">
      {accordionItems.map((item, index) => (
        <div key={index} className="py-2">
          <div
            className="flex justify-between items-center px-4 cursor-pointer mb-4"
            onClick={() => handleToggle(index)}
          >
            <h3 className="font-aeonik font-medium text-xl w-[220px]">{`${
              index + 1
            }. ${item.question}`}</h3>
            <img
              src={openIndex === index ? '/minimize.svg' : '/maximize.svg'}
              alt="accordionico"
              className={`transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </div>
          {openIndex === index && (
            <p className="font-aeonik font-light p-4">{item.answer}</p>
          )}
          {index !== accordionItems.length - 1 && (
            <hr className="w-[343px] m-auto" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
