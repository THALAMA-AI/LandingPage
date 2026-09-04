import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

interface Props {
  /** Video file. Leave undefined to render the empty 16:9 slot. */
  src?: string
  /** Poster image shown before playback. */
  poster?: string
  /** Optional WebVTT captions track. */
  captionsSrc?: string
  /** Caption line under the video. Defaults to the placeholder copy. */
  caption?: string
}

export function VideoSlot({ src, poster, captionsSrc, caption }: Props) {
  const { tx, lang } = useLang()

  return (
    <section className="wrap video-slot">
      <div className="video-slot__frame">
        {src ? (
          <video src={src} poster={poster} controls playsInline preload="metadata">
            {captionsSrc && <track kind="captions" src={captionsSrc} srcLang={lang} default />}
          </video>
        ) : (
          <span className="video-slot__empty">{tx(t.video.empty)}</span>
        )}
      </div>
      <p className="video-slot__caption">{caption ?? tx(t.video.caption)}</p>
    </section>
  )
}
