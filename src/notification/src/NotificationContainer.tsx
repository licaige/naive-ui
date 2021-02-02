import { h, defineComponent, inject } from 'vue'
import { NScrollbar } from '../../scrollbar'
import { NotificationProviderInjection } from './NotificationProvider'

export default defineComponent({
  name: 'NotificationContainer',
  props: {
    scrollable: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    return {
      NNotificationProvider: inject<NotificationProviderInjection>(
        'NNotificationProvider'
      ) as NotificationProviderInjection
    }
  },
  render () {
    const { $slots, scrollable, NNotificationProvider } = this
    return (
      <div
        class={[
          'n-notification-container',
          {
            'n-notification-container--scrollable': scrollable
          }
        ]}
      >
        {scrollable ? (
          <NScrollbar
            theme={NNotificationProvider.mergedTheme.peers.Scrollbar}
            themeOverrides={
              NNotificationProvider.mergedTheme.peerOverrides.Scrollbar
            }
          >
            {$slots}
          </NScrollbar>
        ) : (
          $slots
        )}
      </div>
    )
  }
})