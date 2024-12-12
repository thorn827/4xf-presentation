'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { use } from 'react'
import { 
  Target, 
  Users, 
  Award, 
  Dumbbell, 
  Brain, 
  Briefcase, 
  ChevronRight,
  Battery,
  Flame,
  AlertTriangle 
} from 'lucide-react'
import PDFExport from '@/app/components/PDFExport'

export default function Slide({ params }: { params: { id: string } }) {
  const router = useRouter()
  const slideParams = use(Promise.resolve(params))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        router.push(`/slides/${Number(slideParams.id) + 1}`)
      } else if (e.key === 'ArrowLeft' && Number(slideParams.id) > 1) {
        router.push(`/slides/${Number(slideParams.id) - 1}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [slideParams.id, router])

  const progress = (Number(slideParams.id) / 11) * 100

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="fixed top-4 right-4 z-50 hidden">
        <PDFExport />
      </div>
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-red-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide 1 */}
      {slideParams.id === '1' && (
        <div className="p-8 min-h-screen">
          {/* Header */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-full mr-4"></div>
            <h2 className="text-sm font-light">4XF</h2>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl font-bold mb-12">WHO WE ARE</h1>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left Column - Main Statement */}
            <div className="pr-8 border-r border-gray-800">
              <p className="text-2xl font-light leading-relaxed">
                At 4XF, we specialize in transforming teams by empowering business leaders 
                and their employees through a proven system of leadership and personal development.
              </p>
            </div>
            
            {/* Right Column - Key Points */}
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Leadership</h3>
                  <p className="text-gray-300">Led by Dr. Derek C. Price, our Head Strength Coach, 
                    working directly with business leaders to clarify vision and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-6 h-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Actionable Training</h3>
                  <p className="text-gray-300">Translating direction into concrete training plans 
                    that empower your teams to achieve peak performance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="w-6 h-6 text-red-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-300">Building resilient, high-performing cultures 
                    that consistently achieve measurable results.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Callout */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border-l-4 border-red-600">
            <p className="text-lg">
              Just as an NFL strength coach collaborates with the head coach to develop players 
              for peak performance, Dr. Price ensures your employees are mentally and emotionally 
              conditioned to succeed, freeing you to focus on driving your business forward.
            </p>
          </div>
        </div>
      )}

      {/* Slide 2 - Redesigned */}
      {slideParams.id === '2' && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black opacity-50" />
          
          {/* Main Content */}
          <div className="relative z-10 p-12">
            {/* Header with animated line */}
            <div className="flex items-center space-x-4 mb-16">
              <div className="w-24 h-1 bg-red-600 animate-pulse" />
              <h2 className="text-xl font-light tracking-wider">THE ARCHITECT</h2>
            </div>

            {/* Title Section */}
            <div className="mb-16">
              <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
                DR. DEREK C. PRICE
              </h1>
              <p className="text-2xl text-gray-400 tracking-wide">HEAD STRENGTH COACH</p>
            </div>

            {/* Three Column Achievement Grid */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              <div className="group p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg hover:from-red-950 hover:to-black transition-all duration-300">
                <Dumbbell className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">NFL Athlete</h3>
                <p className="text-gray-400">Elite performance expertise from professional sports to business leadership</p>
              </div>

              <div className="group p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg hover:from-red-950 hover:to-black transition-all duration-300">
                <Brain className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Physician</h3>
                <p className="text-gray-400">Deep understanding of human performance and development</p>
              </div>

              <div className="group p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg hover:from-red-950 hover:to-black transition-all duration-300">
                <Briefcase className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">CEO</h3>
                <p className="text-gray-400">Led nine-figure hospital systems with strategic excellence</p>
              </div>
            </div>

            {/* Bottom Quote Section */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-red-600" />
              <blockquote className="pl-8 text-3xl font-light italic">
                "True greatness isn't a mystery—it's a system."
                <span className="block mt-4 text-lg text-gray-400 not-italic">
                  Combining elite athletics, medicine, and executive leadership to forge exceptional teams
                </span>
              </blockquote>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-red-800 opacity-10 rounded-full blur-2xl" />
          </div>
        </div>
      )}

{slideParams.id === '3' && (
  <div className="relative min-h-screen overflow-hidden bg-black">
    {/* Animated background grid */}
    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 opacity-20">
      {[...Array(64)].map((_, i) => (
        <div 
          key={i}
          className="bg-red-600/30 hover:bg-red-600/50 transition-all duration-500"
          style={{
            animationDelay: `${i * 0.1}s`,
            animation: 'pulse 4s infinite'
          }}
        />
      ))}
    </div>

    {/* Main Content */}
    <div className="relative z-10 p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-light tracking-wider">MAIN FOCUS POINTS</h2>
        </div>
        <div className="text-red-600 text-xl font-bold">4XF</div>
      </div>

      {/* Focus Points Grid */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        {/* Offensive Mindset */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent -skew-x-12 transform group-hover:skew-x-0 transition-transform duration-300" />
          <div className="relative p-8 border-l-2 border-red-600">
            <h3 className="text-3xl font-bold mb-6 flex items-center space-x-4">
              <span className="text-red-600">#1</span>
              <span>Offensive Mindset</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Encourages proactive problem-solving and initiative</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Reduces complacency and builds forward-focused teams</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Drives innovation and empowers ownership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mental Resilience */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent -skew-x-12 transform group-hover:skew-x-0 transition-transform duration-300" />
          <div className="relative p-8 border-l-2 border-red-600">
            <h3 className="text-3xl font-bold mb-6 flex items-center space-x-4">
              <span className="text-red-600">#2</span>
              <span>Mental Resilience</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Equips teams to handle pressure with composure</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Enhances focus during high-stakes situations</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Builds adaptability for consistent performance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Individual Character */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent -skew-x-12 transform group-hover:skew-x-0 transition-transform duration-300" />
          <div className="relative p-8 border-l-2 border-red-600">
            <h3 className="text-3xl font-bold mb-6 flex items-center space-x-4">
              <span className="text-red-600">#3</span>
              <span>Individual Character</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Establishes foundation of trust and reliability</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Strengthens workplace integrity and accountability</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Creates cohesive, values-aligned environment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Personal Confidence */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent -skew-x-12 transform group-hover:skew-x-0 transition-transform duration-300" />
          <div className="relative p-8 border-l-2 border-red-600">
            <h3 className="text-3xl font-bold mb-6 flex items-center space-x-4">
              <span className="text-red-600">#4</span>
              <span>Personal Confidence</span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Cultivates self-assured, decisive team members</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Encourages leadership at all organizational levels</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-5 h-5 text-red-600" />
                <span>Builds unshakeable competence and positivity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -left-8 top-0 w-1 h-full bg-red-600" />
        <blockquote className="pl-8 text-2xl font-light">
          <span className="text-red-600">"</span>
          By focusing on these four pillars, 4XF transforms teams into high-performing, 
          resilient units with the confidence, character, and mindset to drive exceptional results.
          <span className="text-red-600">"</span>
        </blockquote>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-5 rounded-full blur-3xl" />
    <div className="absolute top-20 left-20 w-64 h-64 bg-red-800 opacity-5 rounded-full blur-2xl" />
  </div>
)}

{slideParams.id === '4' && (
  <div className="relative min-h-screen overflow-hidden bg-black">
    {/* Dynamic background effect */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
    </div>

    {/* Warning Lines Animation */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="h-px w-full bg-red-600 absolute"
          style={{
            top: `${i * 10}%`,
            left: 0,
            animation: `slideRight ${3 + i}s infinite linear`,
            opacity: 0.5 - i * 0.05
          }}
        />
      ))}
    </div>

    {/* Main Content */}
    <div className="relative z-10 p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-6">
          <div className="w-1 h-16 bg-red-600 animate-pulse" />
          <div>
            <h2 className="text-red-600 text-xl font-bold tracking-wider mb-2">CRITICAL ISSUES</h2>
            <p className="text-gray-400 max-w-2xl">
              Business owners face recurring challenges that traditional training fails to address. 
              These systemic issues demand a comprehensive solution.
            </p>
          </div>
        </div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* Problem 1 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-8 border-l border-red-600/30 hover:border-red-600 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  Disconnected Culture
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Lack of cohesion and camaraderie among employees leads to low morale, 
                  reduced collaboration, and a fragmented team environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-8 border-l border-red-600/30 hover:border-red-600 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  High Turnover
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Frequent turnover disrupts team dynamics, increases hiring costs, 
                  and erodes institutional knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 3 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-8 border-l border-red-600/30 hover:border-red-600 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <Battery className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  Low Engagement
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Low engagement and motivation diminish productivity and employee satisfaction, 
                  creating a cycle of underperformance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 4 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-8 border-l border-red-600/30 hover:border-red-600 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                <Flame className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  Burnout & Training Failure
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Mental fatigue combines with ineffective one-off training attempts, 
                  creating a perfect storm of stagnation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Warning Section */}
      <div className="relative max-w-4xl mx-auto mt-16">
        <div className="bg-red-950/30 border-l-4 border-red-600 p-8 rounded-r-lg">
          <div className="flex items-center space-x-4 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h4 className="text-xl font-bold">Critical Impact Zone</h4>
          </div>
          <p className="text-gray-400 text-lg">
            These issues compound over time, creating a negative feedback loop that 
            threatens organizational stability and growth potential.
          </p>
        </div>
      </div>
    </div>

    {/* Animated corner accent */}
    <div className="absolute -bottom-24 -right-24 w-48 h-48 rotate-45">
      <div className="w-full h-full bg-red-600/20 animate-pulse" />
    </div>
  </div>
)}
{slideParams.id === '5' && (
  <div className="relative min-h-screen overflow-hidden bg-black">
    {/* Animated hexagon background */}
    <div className="absolute inset-0 opacity-10">
      <div className="honeycomb-pattern"></div>
    </div>

    <div className="relative z-10 p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-1 bg-red-600" />
          <h2 className="text-3xl font-bold">THE SOLUTION</h2>
          <div className="text-red-600 text-xl">PHASE 1-3</div>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="grid grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="group relative transform hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 border border-red-600/20 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-red-600 text-sm font-bold">STEP 01</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Leadership Alignment</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>Define company ethos and core values</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>Identify priority pain points</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group relative transform hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 border border-red-600/20 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-red-600 text-sm font-bold">STEP 02</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Employee Assessment</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>Ethos alignment evaluation</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>Personal development mapping</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group relative transform hover:scale-105 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 border border-red-600/20 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-red-600 text-sm font-bold">STEP 03</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Program Design</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>Custom training framework</span>
              </li>
              <li className="flex items-start space-x-2">
                <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                <span>4XF "Weight Room" access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 bg-gradient-to-r from-red-950/30 to-transparent p-8 rounded-lg border-l-4 border-red-600">
        <h4 className="text-xl font-bold mb-4">Foundation Phase</h4>
        <p className="text-gray-400">
          These initial steps establish the groundwork for transformation, 
          creating a solid foundation for sustainable organizational change.
        </p>
      </div>
    </div>
  </div>
)}

{slideParams.id === '6' && (
  <div className="relative min-h-screen overflow-hidden bg-black">
    {/* Animated circuit lines background */}
    <div className="absolute inset-0 opacity-10">
      <div className="circuit-pattern"></div>
    </div>

    <div className="relative z-10 p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-1 bg-red-600" />
          <h2 className="text-3xl font-bold">THE EXECUTION</h2>
          <div className="text-red-600 text-xl">PHASE 4-7</div>
        </div>
      </div>

      {/* Implementation Steps */}
      <div className="grid grid-cols-2 gap-8">
        {/* Steps 4-7 */}
        {[
          {
            step: "04",
            title: "Leadership Coaching",
            icon: <Briefcase className="w-6 h-6 text-red-600" />,
            points: ["Monthly alignment sessions", "Leadership playbook creation"]
          },
          {
            step: "05",
            title: "Execution Phase",
            icon: <Target className="w-6 h-6 text-red-600" />,
            points: ["Monthly team training", "Personal development tracking"]
          },
          {
            step: "06",
            title: "Continuous Improvement",
            icon: <ChevronRight className="w-6 h-6 text-red-600" />,
            points: ["Monthly performance review", "Program refinement"]
          },
          {
            step: "07",
            title: "Goal Achievement",
            icon: <Award className="w-6 h-6 text-red-600" />,
            points: ["90%+ alignment achievement", "Sustainable culture establishment"]
          }
        ].map((step, index) => (
          <div key={index} className="group relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 border border-red-600/20 rounded-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-red-600 text-sm font-bold">STEP {step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <ul className="space-y-3 text-gray-400">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div className="mt-16 bg-gradient-to-r from-red-950/30 to-transparent p-8 rounded-lg border-l-4 border-red-600">
        <div className="flex items-center space-x-4 mb-4">
          <Award className="w-6 h-6 text-red-600" />
          <h4 className="text-xl font-bold">Measurable Outcomes</h4>
        </div>
        <p className="text-gray-400">
          Through systematic implementation and continuous refinement, 
          organizations achieve sustainable transformation with measurable improvements 
          in team performance, culture, and business results.
        </p>
      </div>
    </div>
  </div>
)}

{slideParams.id === '7' && (
  <div className="min-h-screen bg-black p-16">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-6">
        WHY THIS WORKS
      </h2>
    </div>

    <div className="max-w-6xl">
      <p className="text-xl text-gray-400 mb-12">
        By leveraging 4XF's tailored methodology, businesses achieve:
      </p>

      {/* Key Points */}
      <div className="grid grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-900/50 p-6 rounded-lg border-l-2 border-red-600">
          <h3 className="text-2xl font-bold text-red-600 mb-3">
            Cultural Alignment
          </h3>
          <p className="text-lg text-gray-300">
            Unified teams that embody shared values.
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border-l-2 border-red-600">
          <h3 className="text-2xl font-bold text-red-600 mb-3">
            Employee Empowerment
          </h3>
          <p className="text-lg text-gray-300">
            Individuals who are stronger, more focused, and fully aligned with the company's mission.
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border-l-2 border-red-600">
          <h3 className="text-2xl font-bold text-red-600 mb-3">
            Leadership Confidence
          </h3>
          <p className="text-lg text-gray-300">
            Leaders equipped to drive growth while focusing on strategic goals, knowing their team is trained and ready to perform.
          </p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border-l-2 border-red-600">
          <h3 className="text-2xl font-bold text-red-600 mb-3">
            Sustainable Growth
          </h3>
          <p className="text-lg text-gray-300">
            A framework that ensures continuous improvement, long-term engagement, and operational excellence.
          </p>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-red-600">
        <p className="text-xl text-gray-300 italic">
          This is how 4XF transforms organizations into unstoppable teams driven by character, resilience, and purpose.
        </p>
      </div>
    </div>
  </div>
)}

{slideParams.id === '8' && (
  <div className="min-h-screen bg-black p-16">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-6">
        LEADERSHIP TEAM DELIVERABLES
      </h2>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-2 gap-8 max-w-6xl">
      {/* 1:1 Meetings */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Two Monthly 1:1 Meetings
        </h3>
        <p className="text-xl text-gray-300">
          Focused on determining training direction, approving plans, and coaching on implementation.
        </p>
      </div>

      {/* Satisfaction Survey */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Quarterly Employee Surveys
        </h3>
        <p className="text-xl text-gray-300">
          Insight into employee morale, engagement, and areas for improvement.
        </p>
      </div>

      {/* Training Program */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Direct Access to Dr. Price
        </h3>
        <p className="text-xl text-gray-300">
          Personalized coaching and feedback for leadership growth and alignment.
        </p>
      </div>

      {/* Weight Room */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          4XF "Weight Room" Access
        </h3>
        <p className="text-xl text-gray-300">
          Full access to interactive self-mastery training library.
        </p>
      </div>

      {/* Price Principle */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Monthly Price Principle Sessions
        </h3>
        <p className="text-xl text-gray-300">
          Exclusive principles and live Q&A sessions to address challenges.
        </p>
      </div>

      {/* Onsite Training */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Onsite Training & Activities
        </h3>
        <p className="text-xl text-gray-300">
          Customized training, speaking engagements, and team building activities.
        </p>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="mt-12 bg-gray-900/50 p-6 rounded-lg border-l-4 border-red-600 max-w-6xl">
      <p className="text-xl text-gray-300">
        A comprehensive suite of tools and resources designed to empower your leadership team 
        and drive organizational excellence.
      </p>
    </div>
  </div>
)}

{slideParams.id === '9' && (
  <div className="min-h-screen bg-black p-16">
    {/* Header */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold border-l-4 border-red-600 pl-6">
        STAFF DELIVERABLES
      </h2>
    </div>

    {/* Main Content */}
    <div className="max-w-6xl space-y-8">
      {/* Weight Room */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <div className="flex items-start space-x-6">
          <div className="p-3 bg-red-600/10 rounded-lg">
            <Dumbbell className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Full Access to 4XF "Weight Room"
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive access to all interactive online self-mastery training programs 
              tailored to foster personal growth and alignment with company ethos.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Program */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <div className="flex items-start space-x-6">
          <div className="p-3 bg-red-600/10 rounded-lg">
            <Target className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Monthly Custom Business Program
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              Co-created by leadership and Dr. Price, including:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-300">
                  Video Training Modules tailored to address company pain points and align with team goals
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <ChevronRight className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-xl text-gray-300">
                  PDF Guides and "To Do" Checklists to prepare for leadership meetings and training
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Webinars */}
      <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
        <div className="flex items-start space-x-6">
          <div className="p-3 bg-red-600/10 rounded-lg">
            <Users className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Monthly Webinars with Exceptional Guests
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Free monthly webinars co-hosted by Dr. Price and other extraordinary leaders, 
              offering actionable insights, inspiration, and motivation for personal and 
              professional growth.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Note */}
    <div className="mt-12 bg-gray-900/50 p-6 rounded-lg border-l-4 border-red-600 max-w-6xl">
      <p className="text-xl text-gray-300">
        These deliverables ensure every team member has the tools and resources needed 
        to achieve personal excellence and contribute to organizational success.
      </p>
    </div>
  </div>
)}

{slideParams.id === '10' && (
  <div className="min-h-screen bg-black p-16">
    {/* Header */}
    <div className="mb-16">
      <h2 className="text-5xl font-bold text-red-600 mb-8">
        Transform Your Organization
      </h2>
      <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl">
        Your business's greatest asset is your people. At 4XF, we don't just 
        talk about transformation—we deliver it.
      </p>
    </div>

    {/* Key Benefits */}
    <div className="max-w-5xl">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
          <h4 className="text-2xl font-bold text-red-600 mb-3">Stronger Leadership</h4>
          <p className="text-xl text-gray-300">
            Direct access to Dr. Price to develop actionable strategies.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
          <h4 className="text-2xl font-bold text-red-600 mb-3">Engaged Employees</h4>
          <p className="text-xl text-gray-300">
            Customized monthly training that transforms performance.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
          <h4 className="text-2xl font-bold text-red-600 mb-3">Cohesive Culture</h4>
          <p className="text-xl text-gray-300">
            Build a team that thrives through shared values and confidence.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-lg border-l-2 border-red-600">
          <h4 className="text-2xl font-bold text-red-600 mb-3">Sustainable Results</h4>
          <p className="text-xl text-gray-300">
            Ongoing support to ensure lasting progress and excellence.
          </p>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="mt-12 bg-gray-900/50 p-8 rounded-lg border-l-4 border-red-600">
        <p className="text-2xl text-gray-300 italic">
          More than a program—it's a partnership built for excellence.
        </p>
      </div>
    </div>
  </div>
)}


      {/* Navigation buttons */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        {Number(slideParams.id) > 1 && (
          <button 
            onClick={() => router.push(`/slides/${Number(slideParams.id) - 1}`)}
            className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Previous
          </button>
        )}
        {Number(slideParams.id) < 11 && (
          <button 
            onClick={() => router.push(`/slides/${Number(slideParams.id) + 1}`)}
            className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </main>
  )
}