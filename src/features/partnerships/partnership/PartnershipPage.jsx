import Link from 'next/link';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';

const parseJSON = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

export function PartnershipPage({ partnership }) {
  const challengePoints = parseJSON(partnership.challengePoints);
  const solutionFeatures = parseJSON(partnership.solutionFeatures);
  const reasons = parseJSON(partnership.reasons);
  const whyScales = parseJSON(partnership.whyScales);
  const partnersGet = parseJSON(partnership.partnersGet);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0a2540]">
      <main className="flex-1">
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

          <Container className="relative py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="blue" showDot className="mb-6">
                  Partner with Health Shield
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  {partnership.title}
                </h1>

                <p className="text-xl font-semibold text-gray-700 mb-6">
                  {partnership.heroSubtitle}
                </p>

                {partnership.heroDescription && typeof partnership.heroDescription === 'string' && partnership.heroDescription.includes('<') ? (
                  <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl" dangerouslySetInnerHTML={{ __html: partnership.heroDescription }} />
                ) : (
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                    {partnership.heroDescription}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  {partnership.ctaPrimaryLabel && (
                    <Button href={partnership.ctaPrimaryUrl || '#'} variant="primary" size="lg" className="px-8">
                      {partnership.ctaPrimaryLabel}
                    </Button>
                  )}
                  {partnership.ctaSecondaryLabel && (
                    <Button href={partnership.ctaSecondaryUrl || '#'} variant="secondary" size="lg" className="px-8">
                      {partnership.ctaSecondaryLabel}
                    </Button>
                  )}
                </div>

                {partnership.highlightText && (
                  <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 text-gray-700 shadow-sm">
                    {partnership.highlightText}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-[2rem] shadow-xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-[2rem]" />
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Why Partner With Us?</h3>
                  <div className="space-y-5 text-gray-600">
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                      <p>Improve patient outcomes through continuous remote monitoring</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />
                      <p>Reduce hospital readmissions and operational costs</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                      <p>Unlock scalable value-based care revenue streams</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-teal-500" />
                      <p>Seamless integration with existing healthcare systems</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">24/7</p>
                      <p className="text-sm text-gray-500">Remote Monitoring</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">Scalable</p>
                      <p className="text-sm text-gray-500">Care Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <SectionHeader
              badgeText={partnership.challengeBadgeText || "The Challenge"}
              title={partnership.challengeTitle || "The Challenge"}
              description={partnership.challengeIntro && typeof partnership.challengeIntro === 'string' && partnership.challengeIntro.includes('<') ?
                <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: partnership.challengeIntro }} />
                :
                partnership.challengeIntro
              }
            />
            <div className="grid gap-6 md:grid-cols-2">
              {challengePoints.map((point, index) => (
                <div key={index} className="rounded-[2rem] border border-gray-200 bg-slate-50 p-8">
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-blue-50">
          <Container>
            <SectionHeader
              badgeText={partnership.solutionBadgeText || "Our Solution"}
              title={partnership.solutionTitle || "One Integrated Platform"}
              description={partnership.solutionIntro && typeof partnership.solutionIntro === 'string' && partnership.solutionIntro.includes('<') ?
                <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: partnership.solutionIntro }} />
                :
                partnership.solutionIntro
              }
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {solutionFeatures.map((feature, index) => (
                <div key={index} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <SectionHeader
              badge={partnership.resultsBadgeText || "Early Results"}
              title={partnership.resultsTitle}
              align="center"
            />
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-50 p-10 text-center shadow-sm">
              <Badge variant="blue" className="mb-4">
                {partnership.resultsMetric}
              </Badge>
              {partnership.resultsDescription && typeof partnership.resultsDescription === 'string' && partnership.resultsDescription.includes('<') ?
                <div className="prose prose-sm text-xl text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: partnership.resultsDescription }} />
                :
                <p className="text-xl text-gray-700 mt-2">{partnership.resultsDescription}</p>
              }
            </div>
          </Container>
        </section>

        <section className="py-16 bg-blue-50">
          <Container>
            <SectionHeader
              badgeText={partnership.whyPartnerBadgeText || "Why Partner"}
              title={partnership.whyPartnerTitle || "Why Partner with Health Shield?"}
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((item, index) => (
                <div key={index} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Badge variant="blue" className="min-w-[3rem] justify-center">
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white">
          <Container>
            <SectionHeader
              badgeText={partnership.scalabilityBadgeText || "Scalability"}
              title={partnership.scalabilityTitle || "Why Health Shield Scales With Your Organization"}
              align="center"
            />
            <div className="space-y-4">
              {whyScales.map((item, index) => (
                <div key={index} className="flex gap-4 rounded-[2rem] border border-gray-200 bg-slate-50 p-6">
                  <span className="mt-1 text-blue-600">✓</span>
                  <div>
                    {typeof item === 'object' ? (
                      <>
                        <p className="text-gray-900 font-semibold">{item.title}</p>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-blue-50">
          <Container>
            <SectionHeader
              badgeText={partnership.partnersGetBadgeText || "Partner Benefits"}
              title={partnership.partnersGetTitle || "What Our Partners Get"}
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {partnersGet.map((item, index) => (
                <div key={index} className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
                  {typeof item === 'object' ? (
                    <>
                      <p className="text-gray-900 font-semibold">{item.title}</p>
                      <p className="mt-2 text-gray-700 leading-relaxed">{item.description}</p>
                    </>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <Container>
            <SectionHeader
              badgeText={partnership.finalCtaBadgeText || "Ready to launch"}
              title={partnership.finalCtaTitle}
              description={partnership.finalCtaDescription && typeof partnership.finalCtaDescription === 'string' && partnership.finalCtaDescription.includes('<') ?
                <div className="prose prose-sm text-blue-100" dangerouslySetInnerHTML={{ __html: partnership.finalCtaDescription }} />
                :
                partnership.finalCtaDescription
              }
              align="center"
              titleColor="!text-white"
              descColor="text-blue-100"
            />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {partnership.finalCtaPrimaryLabel && (
                <Button href={partnership.finalCtaPrimaryUrl || '#'} variant="onDark" size="lg">
                  {partnership.finalCtaPrimaryLabel}
                </Button>
              )}
              {partnership.finalCtaSecondaryLabel && (
                <Button href={partnership.finalCtaSecondaryUrl || '#'} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  {partnership.finalCtaSecondaryLabel}
                </Button>
              )}
            </div>
          </Container>
        </section>

        {partnership.trustFounder && (
          <section className="py-12 bg-gray-900 text-white">
            <Container>
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Founded by</p>
                <p className="text-2xl font-semibold">{partnership.trustFounder}</p>
                <p className="text-blue-200">{partnership.trustMarketProjection}</p>
                <p className="text-blue-200">{partnership.trustRPMProjection}</p>
                {partnership.trustFooterText && typeof partnership.trustFooterText === 'string' && partnership.trustFooterText.includes('<') ? (
                  <div className="text-sm text-slate-400 prose prose-sm" dangerouslySetInnerHTML={{ __html: partnership.trustFooterText }} />
                ) : (
                  <p className="text-sm text-slate-400">{partnership.trustFooterText}</p>
                )}
              </div>
            </Container>
          </section>
        )}
      </main>
    </div>
  );
}